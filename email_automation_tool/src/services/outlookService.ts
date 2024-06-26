import * as msal from '@azure/msal-node';
import axios from 'axios';

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

export const fetchOutlookMessages = async (accessToken: string) => {
 
  const apiUrl = 'https://graph.microsoft.com/v1.0/me/mailFolders/inbox/messages';
  
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        $filter: 'isRead eq false',
      },
    });

    return response.data.value; 
  } catch (error) {
    console.error('Error fetching Outlook messages:', error);
    throw error;
  }
};
