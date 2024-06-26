"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGmailMessages = exports.authorizeGoogle = void 0;
const googleapis_1 = require("googleapis");
const { OAuth2 } = googleapis_1.google.auth;
const oauth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
const authorizeGoogle = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const { tokens } = yield oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    return tokens;
});
exports.authorizeGoogle = authorizeGoogle;
const fetchGmailMessages = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    oauth2Client.setCredentials({ access_token: accessToken });
    const gmail = googleapis_1.google.gmail({ version: 'v1', auth: oauth2Client });
    const res = yield gmail.users.messages.list({ userId: 'me', q: 'is:unread' });
    const messages = res.data.messages || [];
    return messages;
});
exports.fetchGmailMessages = fetchGmailMessages;
