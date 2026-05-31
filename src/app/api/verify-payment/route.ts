import { NextResponse } from "next/server";
import { sendRegistrationEmails } from "@/lib/mail";
import { submitToSheet } from "@/components/bmitToSheet";

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 3
): Promise<Response | null> {
  for (let i = 0; i < retries; i++) {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 25000); // 25s timeout

    try {
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeout);
      return res;
    } catch {
      clearTimeout(timeout);

      // last attempt → fail
      if (i === retries - 1) return null;

      // backoff delay (important for Nigeria networks)
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { reference, formData } = body;

    if (!reference || !formData) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing data",
        },
        { status: 400 }
      );
    }

    // 🔥 Paystack verification with retry + timeout
    const verifyRes = await fetchWithRetry(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    // ❌ Network failure after retries
    if (!verifyRes) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to verify payment due to network issues. If your payment was deducted, it will be confirmed shortly.",
        },
        { status: 502 }
      );
    }

    // ❌ Paystack HTTP error (401, 500, etc.)
    if (!verifyRes.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification service error",
        },
        { status: 502 }
      );
    }

    const verifyData = await verifyRes.json();

    // ❌ Invalid response shape
    if (!verifyData?.status || !verifyData?.data) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment verification response",
        },
        { status: 400 }
      );
    }

    const amount = verifyData.data.amount;

    const INHOUSE_FEE = 5000 * 100;
    const OUTSIDER_FEE = 3000 * 100;
    const CERTIFICATE_FEE = 1000 * 100;

    const validAmounts = [
      INHOUSE_FEE + CERTIFICATE_FEE,
      OUTSIDER_FEE + CERTIFICATE_FEE,
    ];

    const isValidPayment =
      verifyData.data.status === "success" &&
      validAmounts.includes(amount);

    if (!isValidPayment) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment amount mismatch or unsuccessful transaction",
        },
        { status: 400 }
      );
    }

    // 💰 Convert amount
    const amountPaid = amount / 100;

    // 📊 Save to Google Sheets
    await Promise.all([
      submitToSheet(formData, reference, amountPaid),
      sendRegistrationEmails({ ...formData, reference }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Verify Payment Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}