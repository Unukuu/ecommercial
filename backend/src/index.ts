import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
dotenv.config();
import authRoute from "./routes/authRoute";
import CategoryRoute from "./routes/categoryRoute";
import { connectDB } from "./config/db";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
//express application object uusgeh

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", CategoryRoute);
app.get("/", async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "ll040299@gmail.com",
      pass: "ssxh blgl ccuy rgue",
    },
  });
  const rndOtp = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(4, "0");
  const info = await transporter.sendMail({
    from: "ll040299@gmail.com", // sender address
    to: "baljinnym1318@gmail.com", // list of receivers
    subject: "Unu bna tanijiinuu", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(rndOtp), // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send("Welcome E-commerce API Server");
});

connectDB(MONGO_URI);
//server
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} turned on`);
});
