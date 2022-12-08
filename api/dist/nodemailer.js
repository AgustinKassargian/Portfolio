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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv').config();
const { USER_MAIL, PASSWORD_MAIL } = process.env;
const transporter = () => __awaiter(void 0, void 0, void 0, function* () {
    const newTransport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: USER_MAIL,
            pass: PASSWORD_MAIL
        }
    });
    return newTransport;
});
exports.transporter = transporter;
const message = (email, subject, body) => __awaiter(void 0, void 0, void 0, function* () {
    const transport = yield (0, exports.transporter)();
    const sending = transport.sendMail({
        from: USER_MAIL,
        to: USER_MAIL,
        subject: `Mensaje de < ${email} >. Asunto: ${subject}`,
        text: body
    });
    return;
});
exports.message = message;
