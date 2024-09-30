import { Router } from "express";
import {
  forgetPassword,
  login,
  signup,
  updateUser,
  verifyOtp,
  verifyPassword,
} from "../controller/auth-controller";
import { auth } from "../middlewares/auth";
import { getCurrentUser } from "../controller/user-controller";
const router = Router();

router.route("/current-user").get(auth, getCurrentUser);
router.route("/verify-password").post(verifyPassword);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/user/:id").put(updateUser);

export default router;
