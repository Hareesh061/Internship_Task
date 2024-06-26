import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, text: string) => {
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  });

  console.log('Message sent: %s', info.messageId);
};
