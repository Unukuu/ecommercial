import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
import authRoute from "./routes/authRoute";

const PORT = process.env.PORT;

//express application object uusgeh
const app = express();
//middlewares
app.use("/api/v1/auth", authRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server HEHA");
});
//server
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} turned on`);
});
