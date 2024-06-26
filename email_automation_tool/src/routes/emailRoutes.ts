import { Router } from 'express';
import { googleOAuthCallback, fetchGmailEmails } from '../controllers/gmailController';
import { outlookOAuthCallback, fetchOutlookEmails } from '../controllers/outlookController';
import { processEmail } from '../controllers/emailController';

const router = Router();

router.get('/google/callback', googleOAuthCallback);
router.get('/outlook/callback', outlookOAuthCallback);
router.get('/gmail/emails', fetchGmailEmails);
router.get('/outlook/emails', fetchOutlookEmails);
router.post('/process-email', processEmail);

export default router;
