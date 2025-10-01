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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const mailer_1 = require("./src/service/mailer/mailer");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8010;
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)({ origin: ["http://localhost:3000", "https://keelmarket.co.uk"] })); // Client Address
app.post("/api/sendmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, email, company } = req.body;
    yield mailer_1.Mailer.sendSupportQuestionsMailMessage(phone, name, email, company);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    res.json("data sent");
}));
app.get("/api/ping", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: "Ok" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
}));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
