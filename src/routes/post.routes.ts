import { Router } from "express";
import { postCreate, postList, postUpdate } from "../controllers/post.controller";
import adminRoutesMiddleWare from "../middlewares/admin-routes.middlewares";
const router = Router();

router.get("/", postList);
router.post("/", adminRoutesMiddleWare, postCreate);
router.put("/:postID", postUpdate);

export default router;
