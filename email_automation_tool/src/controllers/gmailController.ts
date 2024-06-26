import { Request, Response } from 'express';
import { authorizeGoogle, fetchGmailMessages } from '../services/gmailService';

export const googleOAuthCallback = async (req: Request, res: Response) => {
  try {
    const code = req.query.code as string;
    const tokens = await authorizeGoogle(code);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate with Google' });
  }
};

export const fetchGmailEmails = async (req: Request, res: Response) => {
  try {
    const emails = await fetchGmailMessages(req.query.accessToken as string);
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emails from Gmail' });
  }
};
