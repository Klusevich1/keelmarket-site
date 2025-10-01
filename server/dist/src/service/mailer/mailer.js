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
exports.Mailer = void 0;
const config_1 = require("./config");
class Mailer {
    static sendEmail(toMail, subject, content) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(content);
            try {
                const response = yield (0, config_1.sendMail)(toMail, subject, content);
                console.log("🟩 the message has been sent successfully", response);
            }
            catch (error) {
                console.error("🟥 Rejected: error sending the message\n" + error);
            }
        });
    }
    static sendSupportQuestionsMailMessage(phone, username, email, company) {
        return this.sendEmail('kmlweb16@gmail.com', 'Support / Question', `Full name: ${username} \nPhone: ${phone} \nMail: ${email} \nCompany name: ${company}`);
    }
}
exports.Mailer = Mailer;
