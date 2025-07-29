import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY); // ✅ moved here

    const data = await resend.emails.send({
      from: 'Enquiry <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      subject: `New enquiry from ${name}`,
      html: `
        <h3>You've received a new enquiry:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
