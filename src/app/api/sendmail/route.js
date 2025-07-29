// app/api/sendmail/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, service, message,sourcePage } = await request.json();

    // Basic validation for required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields. Please fill out all fields.' },
        { status: 400 } // Bad Request
      );
    }
    const pageSource = sourcePage ? ` (${sourcePage})` : '';

    // Attempt to send the email using Resend
    const resendResult = await resend.emails.send({ // Renamed variable to 'resendResult' for clarity
      from: process.env.RESEND_SENDER_EMAIL,
      to: process.env.YOUR_RECEIVER_EMAIL,
      subject: `New  Enquiry from LifeCycle Financial ${sourcePage} `, // Your customized subject line
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>This enquiry was sent from your website's "Enquire Now" form.</p>
      `,
    });

    // *** CRITICAL FIX: Check for the nested 'id' property ***
    // The log shows resendResult looks like { data: { id: '...' }, error: null }
    if (resendResult && resendResult.data && resendResult.data.id) {
      console.log('✅ Email sent successfully via Resend:', resendResult.data); // Log the nested data
      return NextResponse.json({ success: true, message: 'Email sent successfully!', data: resendResult.data }, { status: 200 }); // Return the nested data
    } else {
      // This else block should now only be hit if Resend truly failed or returned an unexpected structure without an ID.
      console.error('❌ Resend API did not return an ID (unexpected failure):', resendResult);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Resend API response missing ID.' },
        { status: 500 }
      );
    }

  } catch (error) {
    // This block catches network errors or errors thrown by the Resend SDK itself
    console.error('❌ Error sending email from API route:', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred.', error: error.message },
      { status: 500 }
    );
  }
}