import { Request, Response } from 'express';
import { classifyEmailContent, generateEmailReply } from '../services/openaiService';
import { sendEmail } from '../utils/emailUtils';

export const processEmail = async (req: Request, res: Response) => {
  try {
    const { emailBody, recipientEmail } = req.body;
    const label = await classifyEmailContent(emailBody);
    const reply = await generateEmailReply(emailBody);

    await sendEmail(recipientEmail, 'Re: Your Inquiry', reply);
    
    res.json({ label, reply });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process email' });
  }
};
