import { Router } from "express";
import { createCart, getCarts } from "../controller/card-controller";
import { createLiked, getLiked } from "../controller/liked-controller";
const router = Router();
router.route("/").post(createCart).get(getCarts);
router.route("/liked").post(createLiked).get(getLiked);
export default router;
