import { Router } from "express";
import {
  userInterest,
  userInterestCreate,
} from "../controllers/user-interest.controller";
const router = Router();

router.get("/:userID", userInterest);
router.post("/", userInterestCreate);

export default router;
