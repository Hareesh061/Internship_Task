import { Job } from 'bullmq';
import { classifyEmailContent, generateEmailReply } from '../services/openaiService';
import { sendEmail } from '../utils/emailUtils';

const processEmailJob = async (job: Job) => {
  const { emailBody, recipientEmail } = job.data;
  const label = await classifyEmailContent(emailBody);
  const reply = await generateEmailReply(emailBody);

  await sendEmail(recipientEmail, 'Re: Your Inquiry', reply);

  return { label, reply };
};

export default processEmailJob;
