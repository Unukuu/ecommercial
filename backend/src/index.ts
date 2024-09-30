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
  res.send("Welcome E-commerce API Server");
});

connectDB(MONGO_URI);
//server
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} turned on`);
});
