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
    const validAmounts = [
      3000 * 100,
      4000 * 100,
      5000 * 100,
      6000 * 100,
    ];
    
    if (
      verifyData.data.status === "success" &&
      validAmounts.includes(verifyData.data.amount)
    ) {
      // SAVE TO SHEET HERE
      // await submitToSheet(formData, reference)

      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Payment not verified",
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