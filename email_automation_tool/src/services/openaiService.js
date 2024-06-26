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
exports.generateEmailReply = exports.classifyEmailContent = void 0;
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
const classifyEmailContent = (emailBody) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Classify the following email content into one of the categories: Interested, Not Interested, More Information.\n\nEmail: ${emailBody}`,
        max_tokens: 50,
    });
    return response.data.choices[0].text.trim();
});
exports.classifyEmailContent = classifyEmailContent;
const generateEmailReply = (emailBody) => __awaiter(void 0, void 0, void 0, function* () {
    const replyPrompt = `Generate a reply for the following email context: ${emailBody}`;
    const response = yield openai.createCompletion({
        model: 'text-davinci-003',
        prompt: replyPrompt,
        max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
});
exports.generateEmailReply = generateEmailReply;
