import { Router } from "express";
import {
  createNewProduct,
  getAllproducts,
  getProduct,
} from "../controller/product-contoller";
const router = Router();

router.route("/getall").get(getAllproducts).post(createNewProduct);
router.route("/:productId").get(getProduct);
export default router;
