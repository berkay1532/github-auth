import express from "express";
import {
  handleGitHubLogin,
  handleGitHubCallback,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/github", handleGitHubLogin);
router.get("/callback", handleGitHubCallback);

export default router;
