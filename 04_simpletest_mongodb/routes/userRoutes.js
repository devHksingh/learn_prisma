import express from "express";
import {
  signup,
  login,
  logout,
  userDetails,
  getAllusers,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
// router.route("/:email").get(userDetails);
// router.get("/:email", userDetails);
router.get("/allUsers", getAllusers);
router.get("/:email",userDetails)

export default router;
