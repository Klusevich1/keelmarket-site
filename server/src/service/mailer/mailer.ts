import {sendMail} from './config';

class Mailer {
    static async sendEmail(toMail: string, subject: string, content: string): Promise<void> {
        console.log(content)
        try {
            const response = await sendMail(toMail, subject, content);
            console.log("🟩 the message has been sent successfully", response);
        } catch (error) {
            console.error("🟥 Rejected: error sending the message\n" + error);
        }
    }

    static sendSupportQuestionsMailMessage(phone: string, username: string, email: string, company: string): Promise<void> {
        return this.sendEmail('kmlweb16@gmail.com', 'Support / Question', `Full name: ${username} \nPhone: ${phone} \nMail: ${email} \nCompany name: ${company}`);
    }

}

export {Mailer};
