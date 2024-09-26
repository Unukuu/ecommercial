import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utils/jwt";
const jwt = require("jsonwebtoken");

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log("body", req.headers);
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "nevternuu" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;
  next();
};
module.exports = { auth };
