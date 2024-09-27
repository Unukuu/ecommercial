import { Router } from "express";
import { addCategory, getCategories } from "../controller/category-controller";
import { auth } from "../middlewares/auth";
const router = Router();

router.route("/add").post(auth, addCategory).get(auth, getCategories);

export default router;
