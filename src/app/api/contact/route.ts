import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const runtime = "nodejs"; // SendGrid needs Node runtime (not Edge)

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; 
  message: string;
  recaptchaToken: string; // ✅ reCAPTCHA (NEW)
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

// ✅ reCAPTCHA (NEW): verify helper
async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY");
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = (await res.json()) as {
    success: boolean;
    "error-codes"?: string[];
  };

  return data;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();
    const recaptchaToken = (body.recaptchaToken ?? "").trim(); // ✅ reCAPTCHA (NEW)

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill out all fields." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ✅ reCAPTCHA (NEW): require token
    if (!recaptchaToken) {
      return NextResponse.json(
        { ok: false, error: "Please complete the reCAPTCHA." },
        { status: 400 }
      );
    }

    // ✅ reCAPTCHA (NEW): verify token with Google
    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.success) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL;
    const to = process.env.SENDGRID_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Server is missing email configuration." },
        { status: 500 }
      );
    }

    sgMail.setApiKey(apiKey);

    const subject = `New Contact Form Message — ${firstName} ${lastName}`;
    const text = `Name: ${firstName} ${lastName}
    Email: ${email}${phone ? `\nPhone: ${phone}` : ""}

    Message:
    ${message}
    `;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px;">New Contact Form Message</h2>
        <p style="margin:0 0 6px;"><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p style="margin:0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          phone
            ? `<p style="margin:0 0 6px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>`
            : ""
        }
        <p style="margin:14px 0 6px;"><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #eee; padding: 12px; border-radius: 8px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    await sgMail.send({
      to,
      from,
      subject,
      text,
      html,
      replyTo: email, // lets you hit "Reply" in your inbox
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}

// tiny helper to avoid HTML injection in email body
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
