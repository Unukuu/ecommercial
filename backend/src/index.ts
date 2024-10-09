import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
dotenv.config();
import authRoute from "./routes/authRoute";
import categoryRoute from "./routes/categoryRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
//express application object uusgeh

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/carts", cartRoute);
app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server");
});

connectDB(MONGO_URI);
//server
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} turned on`);
});
