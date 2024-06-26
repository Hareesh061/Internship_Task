import * as msal from '@azure/msal-node';

const config: msal.Configuration = {
  auth: {
    clientId: process.env.OUTLOOK_CLIENT_ID || '', 
    authority: `https://login.microsoftonline.com/${process.env.OUTLOOK_TENANT_ID}`,
    clientSecret: process.env.OUTLOOK_CLIENT_SECRET || '',
  },
};

const cca = new msal.ConfidentialClientApplication(config);

export const authorizeOutlook = async (code: string) => {
  const tokenResponse = await cca.acquireTokenByCode({
    code,
    scopes: ['Mail.Read'],
    redirectUri: process.env.OUTLOOK_REDIRECT_URI || '', 
  });
  return tokenResponse;
};
