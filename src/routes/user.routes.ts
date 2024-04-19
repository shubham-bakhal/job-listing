import { Router } from "express";
import { userByEmail, userCreate } from "../controllers/user.controller";
const router = Router();

router.get("/", userByEmail);
router.post("/", userCreate);

export default router;
