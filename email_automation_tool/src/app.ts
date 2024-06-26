import express from 'express';
import emailRoutes from './routes/emailRoutes';
import { addEmailToQueue } from './queues/emailQueue';

const app = express();
app.use(express.json());

app.use('/api', emailRoutes);

app.post('/send-test-email', async (req, res) => {
  const { emailBody, recipientEmail } = req.body;
  await addEmailToQueue(emailBody, recipientEmail);
  res.json({ message: 'Email added to queue for processing' });
});

export default app;
