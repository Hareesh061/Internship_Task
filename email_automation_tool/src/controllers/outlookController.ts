import { Request, Response } from 'express';
import { authorizeOutlook, fetchOutlookMessages } from '../services/outlookService';

export const outlookOAuthCallback = async (req: Request, res: Response) => {
  try {
    const code = req.query.code as string;
    const tokens = await authorizeOutlook(code);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate with Outlook' });
  }
};

export const fetchOutlookEmails = async (req: Request, res: Response) => {
  try {
    const emails = await fetchOutlookMessages(req.query.accessToken as string);
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emails from Outlook' });
  }
};
