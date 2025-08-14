// user.routes.js
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

console.log("inside users routes");

// Example register route (commented in your code)
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser,
);

router.route("/").get((req, res) => {
  return res.status(200).json({
    status: "success",
  });
});

export default router;
