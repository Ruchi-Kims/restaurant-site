import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nom, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_RESTAURANT!,
      subject: `✉️ Nouveau message de ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #1c1410; color: #fff; border: 1px solid #b8860b;">
          <h1 style="color: #f59e0b; font-size: 24px; margin-bottom: 24px;">✦ Nouveau Message — Chez Claude</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; color: #f59e0b; width: 40%;">Nom</td><td style="padding: 10px; color: #d1d5db;">${nom}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Email</td><td style="padding: 10px; color: #d1d5db;">${email}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Message</td><td style="padding: 10px; color: #d1d5db;">${message}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}