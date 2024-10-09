import { Router } from "express";
import { createCart, getCarts } from "../controller/card-controller";
const router = Router();
router.route("/").post(createCart).get(getCarts);
export default router;
