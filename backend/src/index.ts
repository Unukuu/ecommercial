import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import authRoute from "./routes/authRoute";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express application object uusgeh

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server HEHA");
});

connectDB(MONGO_URI);
//server
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} turned on`);
});
