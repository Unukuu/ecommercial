import { Request, Response } from "express";
import Liked from "../models/likedModel";

export const getLiked = async (req: Request, res: Response) => {
  try {
    const likedProducts = await Liked.find({}).populate("products.product");
    res.status(200).json({ message: "success", data: likedProducts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "get carts error", error: error });
  }
};

export const createLiked = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  try {
    const findUserLiked = await Liked.findOne({ user: userId });
    if (!findUserLiked) {
      const cart = await Liked.create({
        user: userId,
        products: { product: productId },
      });
      return res.status(200).json({
        message: "created new cart",
        cart,
      });
    }
    // const findDuplicated = findUserLiked.products.findIndex(
    //   (item) => item.product.toString() === productId
    // );
    // if (findDuplicated > -1) {
    //   findUserCart.products[findDuplicated].quantity += quantity;
    // } else {
    //   findUserCart.products.push({ product: productId, quantity });
    // }
    // const updatedCart = await findUserCart.save();
    // res.status(200).json({
    //   message: "updated cart",
    //   updatedCart,
    // });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to read likedProducts",
    });
  }
};
