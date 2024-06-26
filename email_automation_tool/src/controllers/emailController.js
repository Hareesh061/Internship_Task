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
exports.processEmail = void 0;
const openaiService_1 = require("../services/openaiService");
const emailUtils_1 = require("../utils/emailUtils");
const processEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailBody, recipientEmail } = req.body;
        const label = yield (0, openaiService_1.classifyEmailContent)(emailBody);
        const reply = yield (0, openaiService_1.generateEmailReply)(emailBody);
        yield (0, emailUtils_1.sendEmail)(recipientEmail, 'Re: Your Inquiry', reply);
        res.json({ label, reply });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to process email' });
    }
});
exports.processEmail = processEmail;
