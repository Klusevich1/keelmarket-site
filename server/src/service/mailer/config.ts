import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const HTML_PATH = "/resources/html/";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "kmlweb16@gmail.com",
        pass: "dhxo hwbd jkom mllk"
    }
});

async function sendMail(toMail: string, subject: string, content: string): Promise<string | undefined> {
    let mailOptions = {
        from: "kmlweb16@gmail.com",
        to: toMail,
        subject: subject,
        html: '',
        text: '',
    };

    mailOptions.text = content;

    return new Promise<string | undefined>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                if (info.response) {
                    resolve(info.response);
                } else {
                    resolve(undefined);
                }
            }
        });
    });
}

export { sendMail };
