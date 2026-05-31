import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        {
          exists: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    const checkRes = await fetch(
      `${process.env.GOOGLE_CHECK_URL}?email=${encodeURIComponent(email)}`
    );

    const checkData = await checkRes.json();

    return NextResponse.json({
      exists: checkData.exists,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        exists: false,
        message: "Unable to check registration",
      },
      { status: 500 }
    );
  }
}