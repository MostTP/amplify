import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { reference } = body;

    const verifyRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const verifyData = await verifyRes.json();

    if (verifyData.status !== true) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Paystack response",
        },
        { status: 400 }
      );
    }

    const amount = verifyData.data.amount; // in kobo

    // ✅ NEW PRICING MODEL
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

    if (isValidPayment) {
      // SAVE TO SHEET HERE
      // await submitToSheet(formData, reference)

      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Payment amount mismatch or invalid transaction",
      },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}