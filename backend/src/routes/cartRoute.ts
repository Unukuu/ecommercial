import { Router } from "express";
import { createCart, getCart, updateCart } from "../controller/card-controller";
import { createLiked, getLiked } from "../controller/liked-controller";
import { auth } from "../middlewares/auth";
const router = Router();
router.route("/").post(createCart).get(auth, getCart).put(auth, updateCart);
router.route("/liked").post(createLiked).get(getLiked);
export default router;
