import { Router } from "express";
import { addCategory, getCategories } from "../controller/category-controller";
const router = Router();

router.route("/add").post(addCategory).get(getCategories);

export default router;
