import { Router } from "express";
import { addCategory, getCategories } from "../controller/category-controller";
import { auth } from "../middlewares/auth";
const router = Router();

router.route("/add").post(addCategory).get(getCategories);

export default router;
