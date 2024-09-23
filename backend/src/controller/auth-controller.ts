import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import bcrypt from "bcrypt";

const TOKENPASS = process.env.TOKENPASS || "";

export const signup = async (req: Request, res: Response) => {
  try {
    const { lastname, firstname, email, password } = req.body;
    if (!lastname || !firstname || !email || !password) {
      res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }
    const createdUSer = await User.create({
      lastname,
      firstname,
      email,
      password,
      phoneNumber: "99112233",
    });
    res.status(201).json({ message: "success", user: createdUSer });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "Burtgelgui hereglegch baina" });
    } else {
      const isCheck = bcrypt.compareSync(password, user?.password);
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "hereglegchiin email esvel nuuts ug buruu baina" });
      } else {
        const token = jwt.sign({ id: user._id }, TOKENPASS, {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "success", token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error", user: error });
  }
};
