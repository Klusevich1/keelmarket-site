import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import { json } from 'body-parser';
import { Mailer } from './src/service/mailer/mailer';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());
app.use(cors({origin: process.env.CLIENT_URL || 'http://localhost:3000'})); // Client Address

app.post('/api/sendmail', async (req: Request, res: Response) => {
  const {name, phone, email, company} = req.body;
  // await Mailer.sendSupportQuestionsMailMessage(phone, name, email, company);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json('data sent')
});
app.get('/api/ping', async (req: Request, res: Response) => {
    try {
        res.json({message: 'Ok'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'server error'});
    }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});