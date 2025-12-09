'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
        throw new Error("Missing fields");
    }

    const transporter = nodemailer.createTransport({
        sendmail: true,
        newline: "unix",
        path: "/usr/sbin/sendmail", // typical Linux path
    });

    await transporter.sendMail({
        from: `"Website Contact Form" <no-reply@yourdomain.com>`,
        to: "slaser.babu@gmail.com",
        subject: "New Contact Form Submission",
        text: `Message from: ${name} (${email})\n\n${message}`,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    });

    return "sent";
}
