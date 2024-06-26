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
exports.fetchGmailEmails = exports.googleOAuthCallback = void 0;
const gmailService_1 = require("../services/gmailService");
const googleOAuthCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = req.query.code;
        const tokens = yield (0, gmailService_1.authorizeGoogle)(code);
        res.json(tokens);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to authenticate with Google' });
    }
});
exports.googleOAuthCallback = googleOAuthCallback;
const fetchGmailEmails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = yield (0, gmailService_1.fetchGmailMessages)(req.query.accessToken);
        res.json(emails);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch emails from Gmail' });
    }
});
exports.fetchGmailEmails = fetchGmailEmails;
