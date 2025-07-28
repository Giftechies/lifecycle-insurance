import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const data = await resend.emails.send({
      from: 'Enquiry <onboarding@resend.dev>', // Must be a verified or allowed sender
      to: 'manveershah007@gmail.com', // Your inbox
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
