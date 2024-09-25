import { Request, Response } from "express";
import Category from "../models/category.model";

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }
    const createdCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({ message: "success", user: createdCategory });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const getCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await Category.find({});
    res.status(201).json({ message: "success", categories: allCategories });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
