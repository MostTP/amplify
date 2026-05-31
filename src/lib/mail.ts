import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendRegistrationEmails(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    church: string;
    notes: string;
    attendanceType: string;
    reference: string;
}) {
    const {
        firstName,
        email,
        department,
    } = data;

    await transporter.sendMail({
        from: `"M.E.P Conference" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "AMPLIFY.26 Registration Confirmed",
        html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 20px;">

          <table
            width="620"
            cellpadding="0"
            cellspacing="0"
            style="
              background:#ffffff;
              border-radius:24px;
              overflow:hidden;
              box-shadow:0 20px 60px rgba(15,23,42,.08);
            "
          >

            <!-- HERO -->
            <tr>
              <td
                style="
                  background:linear-gradient(135deg,#2563eb,#06b6d4,#a855f7);
                  padding:60px 40px;
                  text-align:center;
                "
              >

                <div
                  style="
                    display:inline-block;
                    padding:8px 18px;
                    border-radius:999px;
                    background:rgba(255,255,255,.15);
                    color:white;
                    font-size:12px;
                    font-weight:700;
                    letter-spacing:.15em;
                  "
                >
                  M.E.P CONFERENCE 2026
                </div>

                <h1
                  style="
                    color:white;
                    margin:24px 0 12px;
                    font-size:42px;
                    line-height:1.1;
                  "
                >
                  Registration Confirmed
                </h1>

                <p
                  style="
                    color:rgba(255,255,255,.9);
                    font-size:16px;
                    margin:0;
                  "
                >
                  Welcome to AMPLIFY.26
                </p>

              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:50px 40px;">

                <h2
                  style="
                    color:#0f172a;
                    margin-top:0;
                    font-size:28px;
                  "
                >
                  Hello ${firstName},
                </h2>

                <p
                  style="
                    color:#475569;
                    font-size:16px;
                    line-height:1.8;
                  "
                >
                  Thank you for registering for
                  <strong>AMPLIFY.26</strong>.
                  Your payment has been received and your registration
                  is now confirmed.
                </p>

                <!-- INFO CARD -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:18px;
                    margin:30px 0;
                  "
                >
                  <tr>
                    <td style="padding:25px;">
                      <p style="margin:0 0 12px;color:#64748b;">
                        Department
                      </p>

                      <h3
                        style="
                          margin:0;
                          color:#0f172a;
                          font-size:22px;
                        "
                      >
                        ${department}
                      </h3>
                    </td>
                  </tr>
                </table>

                <p
                  style="
                    color:#475569;
                    font-size:16px;
                    line-height:1.8;
                  "
                >
                  We are excited to host you for a transformational
                  experience in media, creativity, production,
                  storytelling, technology, and ministry excellence.
                </p>

                <!-- CTA -->
                <table cellpadding="0" cellspacing="0" style="margin-top:35px;">
                  <tr>
                    <td
                      style="
                        background:#2563eb;
                        border-radius:999px;
                      "
                    >
                      <a
                        href="https://amplify-five-mu.vercel.app/"
                        style="
                          display:inline-block;
                          color:white;
                          text-decoration:none;
                          padding:16px 30px;
                          font-weight:700;
                        "
                      >
                        Visit Conference Website
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td
                style="
                  padding:35px;
                  text-align:center;
                  border-top:1px solid #e2e8f0;
                  background:#fafafa;
                "
              >
                <h3
                  style="
                    margin:0;
                    color:#0f172a;
                  "
                >
                  M.E.P Conference Team
                </h3>

                <p
                  style="
                    margin:12px 0 0;
                    color:#64748b;
                    font-size:14px;
                  "
                >
                  Media Excellence & Production Conference
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `,
    });
}