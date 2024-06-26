import { Queue, Worker } from 'bullmq';
import processEmailJob from '../jobs/emailProcessor';

const emailQueue = new Queue('emailQueue');

new Worker('emailQueue', processEmailJob);

export const addEmailToQueue = async (emailBody: string, recipientEmail: string) => {
  await emailQueue.add('processEmail', { emailBody, recipientEmail });
};
