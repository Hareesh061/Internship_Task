import dotenv from 'dotenv';
dotenv.config();

export default {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    redirectUri: process.env.GOOGLE_REDIRECT_URI!,
  },
  outlook: {
    clientId: process.env.OUTLOOK_CLIENT_ID!,
    tenantId: process.env.OUTLOOK_TENANT_ID!,
    clientSecret: process.env.OUTLOOK_CLIENT_SECRET!,
    redirectUri: process.env.OUTLOOK_REDIRECT_URI!,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
  },
  email: {
    address: process.env.EMAIL!,
    password: process.env.EMAIL_PASSWORD!,
  },
};
