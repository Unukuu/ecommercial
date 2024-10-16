import { Router } from "express";
import {
  addComment,
  createNewProduct,
  getAllproducts,
  getProduct,
} from "../controller/product-contoller";
import { auth } from "../middlewares/auth";
const router = Router();

router.route("/getall").get(getAllproducts).post(createNewProduct);
router.route("/:productId").get(getProduct).post(auth, addComment);
export default router;
