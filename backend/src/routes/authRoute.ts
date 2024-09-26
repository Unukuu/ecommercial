import { Router } from "express";
import { login, signup } from "../controller/auth-controller";
import { auth } from "../middlewares/auth";
import { getCurrentUser } from "../controller/user-controller";
const router = Router();

router.route("/current-user").get(auth, getCurrentUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
