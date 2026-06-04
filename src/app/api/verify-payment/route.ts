import { NextResponse } from "next/server";
import { sendRegistrationEmails } from "@/lib/mail";
import { submitToSheet } from "@/components/bmitToSheet";

async function fetchWithRetry(url: string, options: RequestInit, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    try {
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeout);
      return res;
    } catch {
      clearTimeout(timeout);

      if (i === retries - 1) return null;

      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { reference, formData } = body;

    // =========================
    // FREE REGISTRATION (NO PAYMENT)
    // =========================
    if (!reference) {
      await submitToSheet(
        {
          ...formData,
          paymentStatus: "free",
          amountPaid: 0,
          reference: "",
        },
        "",
        0
      );

      await sendRegistrationEmails({
        ...formData,
        reference: "",
      });

      return NextResponse.json({
        success: true,
        message: "Registration successful",
      });
    }

    // =========================
    // VERIFY PAYSTACK
    // =========================
    const verifyRes = await fetchWithRetry(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    if (!verifyRes) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to verify payment (network error)",
        },
        { status: 502 }
      );
    }

    const verifyData = await verifyRes.json();

    if (!verifyData?.status || !verifyData?.data) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Paystack response",
        },
        { status: 400 }
      );
    }

    const payment = verifyData.data;

    // =========================
    // CORE CHECK
    // =========================
    if (payment.status !== "success") {
      return NextResponse.json(
        {
          success: false,
          message: "Payment not successful",
        },
        { status: 400 }
      );
    }

    const amountPaid = payment.amount / 100;

    // =========================
    // GOOGLE SHEET WRITE (IDEMPOTENT SAFE)
    // =========================
    await submitToSheet(
      {
        ...formData,
        paymentStatus: "paid",
        amountPaid,
        reference,
      },
      reference,
      amountPaid
    );

    // =========================
    // EMAIL NOTIFICATION
    // =========================
    await sendRegistrationEmails({
      ...formData,
      reference,
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Verify Payment Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}