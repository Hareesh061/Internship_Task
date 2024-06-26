"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
    },
    outlook: {
        clientId: process.env.OUTLOOK_CLIENT_ID,
        tenantId: process.env.OUTLOOK_TENANT_ID,
        clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
        redirectUri: process.env.OUTLOOK_REDIRECT_URI,
    },
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
    },
    email: {
        address: process.env.EMAIL,
        password: process.env.EMAIL_PASSWORD,
    },
};
