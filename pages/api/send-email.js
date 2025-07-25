// pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'manveershah007@gmail.com', // replace with your verified sender (or keep for dev)
      to: ['manveershah008@gmail.com','manveershah007@gmail.com'], // your destination email
      subject: `Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('📨 Resend API response:', response);
    return res.status(200).json({ success: true, message: 'Email sent successfully', data: response });

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
}
