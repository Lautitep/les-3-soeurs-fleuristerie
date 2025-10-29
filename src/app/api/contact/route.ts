// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = Object.fromEntries(form) as Record<string, string>;

    // Honeypot anti-spam
    if (data.website_trap) {
      return NextResponse.json({ ok: true });
    }

    const { firstName, lastName, email, phone, date, message } = data;

    const subject = `Nouveau contact — ${firstName} ${lastName}`;
    const html = `
      <h2>Nouveau message depuis le site Les 3 Sœurs</h2>
      <p><strong>Nom :</strong> ${firstName ?? ''} ${lastName ?? ''}</p>
      <p><strong>Email :</strong> ${email ?? ''}</p>
      <p><strong>Téléphone :</strong> ${phone ?? ''}</p>
      <p><strong>Date :</strong> ${date ?? ''}</p>
      <p><strong>Message :</strong></p>
      <p style="white-space:pre-wrap">${(message ?? '').replace(/</g, '&lt;')}</p>
    `;

    await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: [process.env.CONTACT_TO!],
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
