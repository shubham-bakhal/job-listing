import { Router } from "express";
import { userPosts } from "../controllers/user-post.controller";
const router = Router();

router.get("/:userID", userPosts);

export default router;
