import { Request, Response } from "express";
import Product from "../models/product.model";
export const getAllproducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({}).populate("category");
    console.log("products", allProducts);
    res.status(200).json({ message: "success", user: allProducts });
  } catch (error: any) {
    console.log(error.message);
    res.status(404).json({ message: "aldaa garlaa", error: error.message });
  }
};
export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    } = req.body;
    const createdProduct = await Product.create({
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    });
    res.status(201).json({ message: "success", user: createdProduct });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId).populate([
      "category",
      "commentSec.user",
    ]);
    res.status(200).json({ message: "success to get one product", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get one product" });
  }
};
export const addComment = async (req: Request, res: Response) => {
  const { starRating, comment } = req.body;
  const { productId } = req.params;
  const { id } = req.user;
  try {
    const product = await Product.findById(productId)
      .populate("commentSec.user")
      .select("firstname");
    product?.commentSec.push({ starRating, comment, user: id });
    const updatedComment = await product?.save();
    res.status(200).json({ message: "success", updatedComment });
  } catch (error) {
    console.log("====> comment section aldaa", error);
    res.status(400).json({ message: "aldaa garlaa", error: error });
  }
};
