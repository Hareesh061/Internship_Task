"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleAuthUrl = void 0;
const googleapis_1 = require("googleapis");
const { OAuth2 } = googleapis_1.google.auth;
const oauth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
const getGoogleAuthUrl = () => {
    return oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.readonly'],
    });
};
exports.getGoogleAuthUrl = getGoogleAuthUrl;
