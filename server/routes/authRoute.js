import express from "express";
import {
  registerController,
  loginController,
//   forgetPasswordController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD (POST)
router.post("/register", registerController);

// LOGIN || METHOD (POST)
router.post("/login", loginController);

// FORGOT PASSWORD || METHOD (POST)
// router.post("/forgot-password", forgetPasswordController);



export default router;