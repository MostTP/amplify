import { NextResponse } from "next/server";
import { submitToSheet } from "@/components/bmitToSheet";
import { sendRegistrationEmails } from "@/lib/mail";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formData, proofBase64, proofFilename, amountPaid } = body;

    if (!formData || !proofBase64 || !proofFilename) {
      return NextResponse.json({ success: false, message: "Missing data" }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const timestamp = Date.now();
    const safeName = `${timestamp}-${proofFilename.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
    const filePath = path.join(uploadsDir, safeName);

    // proofBase64 expected as data URL or raw base64. Strip data URL prefix if present.
    const base64String = proofBase64.includes(",") ? proofBase64.split(",")[1] : proofBase64;
    const mimeMatch = proofBase64.match(/^data:(.*);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : null;

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (mimeType && !allowedTypes.includes(mimeType)) {
      return NextResponse.json({ success: false, message: "Unsupported file type. Use JPEG, PNG, or PDF." }, { status: 400 });
    }

    const buffer = Buffer.from(base64String, "base64");
    const maxBytes = 5 * 1024 * 1024; // 5MB
    if (buffer.length > maxBytes) {
      return NextResponse.json({ success: false, message: "Proof file is too large. Max 5MB." }, { status: 400 });
    }

    await fs.promises.writeFile(filePath, buffer);
    const origin = new URL(req.url).origin;
    const proofUrl = `${origin}/uploads/${safeName}`;

    // Submit to sheet with pending status and proof metadata
    await submitToSheet(
      {
        ...formData,
        proofFilename,
        proofUrl,
      },
      `offline-proof:${safeName}`,
      amountPaid || 0,
      "PENDING"
    );

    // TODO: send a different email for pending payments. For now reusing existing email.
    await sendRegistrationEmails({
      ...formData,
      reference: `offline-proof:${safeName}`,
    });

    return NextResponse.json({ success: true, message: "Proof uploaded" });
  } catch (err) {
    console.error("Offline proof upload error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
