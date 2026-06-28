import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendContactEmail = async (contact) => {
  try {
    const transporter = createTransporter();

    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: contact.email,

      subject: `New Contact Form Submission from ${contact.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${contact.service}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <hr>
        <p><small>Submitted from IP: ${contact.ipAddress}</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    if (contact.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: contact.email,
        subject: "We've received your inquiry – OutPro India",
        html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; line-height: 1.6;">
      <h2 style="color:#2563eb;">Thank You for Contacting OutPro India!</h2>

      <p>Hi <strong>${contact.name}</strong>,</p>

      <p>We've received your inquiry and truly appreciate your interest in <strong>OutPro India</strong>.</p>

      <p>Our team will review your message and get back to you within <strong>24 hours</strong>.</p>

      <hr>

      <h3>Your Submission</h3>

      <p><strong>Service:</strong> ${contact.service}</p>

      <p><strong>Your Message:</strong></p>

      <blockquote style="background:#f5f5f5;padding:15px;border-left:4px solid #2563eb;">
        ${contact.message}
      </blockquote>

      <p>If you have any urgent questions, simply reply to this email.</p>

      <br>

      <p>Best regards,</p>

      <p>
        <strong>OutPro India</strong><br>
        Sports • Events • Adventure
      </p>
    </div>
  `,
      });
    }
    console.log('✅ Email sent successfully');
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw error;
  }
};
