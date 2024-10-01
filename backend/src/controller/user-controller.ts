import User from "../models/user.model";
import { Request, Response } from "express";
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    //
    const findUser = await User.findById(id);
    console.log("user", findUser);
    res.status(200).json({ message: "success", user: findUser });
  } catch (error: any) {
    console.log(error.message);
    res.status(404).json({ message: "aldaa garlaa", error: error.message });
  }
};
