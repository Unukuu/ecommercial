import { Router } from "express";
import {
  createNewProduct,
  getAllproducts,
} from "../controller/product-contoller";
const router = Router();

router.route("/getall").get(getAllproducts).post(createNewProduct);

export default router;
