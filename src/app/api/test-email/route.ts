// app/api/test-email/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"M.E.P Conference" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Nodemailer Test",
      html: "<h1>Nodemailer is working!</h1>",
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}