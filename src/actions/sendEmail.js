"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  try {
    const {captchaValue,...rest} = formData;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
    { method: "POST" }
  );

  const data = await response.json();

  if (!data.success) {
    return { success: false, message: "Captcha verification failed." };
  }
    await resend.emails.send({
      from: process.env.Email_from, // or your verified domain
      to: process.env.Email_to,
      subject: "New Enquiry from Website", 
      html: ` 
        <h2>New Enquiry Details:</h2>
        <p><strong>Name:</strong> ${rest.firstName} ${rest.lastName}</p>
        <p><strong>Phone:</strong> ${rest.phone}</p>
        <p><strong>Email:</strong> ${rest.email}</p>
        <p><strong>Service Interest:</strong> ${rest.service}</p>
        <p><strong>Loan Amount:</strong> ${rest.loanAmount}</p>
        <p><strong>Property Value:</strong> ${rest.propertyValue}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendContactEmail(formData) {
  try {
    const { captchaValue, ...rest } = formData;
   // ✅ Step 1: Verify captcha
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
    { method: "POST" }
  );

  const data = await response.json();

  if (!data.success) {
    return { success: false, message: "Captcha verification failed." };
  }
    await resend.emails.send({
      from: process.env.Email_from,
      to: process.env.Email_to,
      subject: `New Contact Message: ${rest.subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${rest.firstName}</p>
        <p><strong>Phone:</strong> ${rest.phone}</p>
        <p><strong>Email:</strong> ${rest.email}</p>
        <p><strong>Subject:</strong> ${rest.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${rest.message}</p> 
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Failed to send email" };
  }   
}
