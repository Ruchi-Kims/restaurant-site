import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Ajout de "email" dans la déstructuration
  const { nom, email, telephone, date, heure, personnes, message } = await req.json();

  try {
    // 1. Email pour le RESTAURATEUR (Toi)
    await resend.emails.send({
      from: "Chez L'Assiette <onboarding@resend.dev>",
      to: process.env.EMAIL_RESTAURANT!,
      subject: `🍽️ Nouvelle réservation de ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #1c1410; color: #fff; border: 1px solid #b8860b;">
          <h1 style="color: #f59e0b; font-size: 24px; margin-bottom: 24px;">✦ Nouvelle Réservation — Chez Claude</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; color: #f59e0b; width: 40%;">Nom & Prénom</td><td style="padding: 10px; color: #d1d5db;">${nom}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Email Client</td><td style="padding: 10px; color: #d1d5db;">${email}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Téléphone</td><td style="padding: 10px; color: #d1d5db;">${telephone}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Date</td><td style="padding: 10px; color: #d1d5db;">${date}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Heure</td><td style="padding: 10px; color: #d1d5db;">${heure}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Nombre de personnes</td><td style="padding: 10px; color: #d1d5db;">${personnes}</td></tr>
            <tr><td style="padding: 10px; color: #f59e0b;">Message</td><td style="padding: 10px; color: #d1d5db;">${message || "Aucun message"}</td></tr>
          </table>
        </div>
      `,
    });

    // 2. Email de CONFIRMATION pour le CLIENT
    if (email) {
      await resend.emails.send({
        from: "Chez L'Assiette <onboarding@resend.dev>",
        to: email,
        subject: "Confirmation de votre réservation — Chez Claude",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #1c1410; color: #fff; border: 1px solid #b8860b; text-align: center;">
            <h1 style="color: #f59e0b; font-size: 24px;">Merci pour votre réservation !</h1>
            <p style="color: #d1d5db; font-size: 16px; line-height: 1.6;">
              Bonjour ${nom},<br><br>
              Nous avons bien reçu votre demande pour une table de <strong>${personnes} personnes</strong> le <strong>${date}</strong> à <strong>${heure}</strong>.
            </p>
            <p style="color: #d1d5db; font-size: 14px; margin-top: 20px; border-top: 1px solid #333; padding-top: 20px;">
              À très bientôt chez <strong>Claude</strong> !<br>
              <span style="color: #f59e0b;">✦ 12 Rue des Saveurs, 75001 Paris</span>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}