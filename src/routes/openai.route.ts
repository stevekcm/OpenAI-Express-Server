import { Router } from "express";
import openaiController from "../controllers/openai.controller";

const router = Router();

router.get("/list", openaiController.list);
router.get("/", openaiController.retrieve);
router.post("/", openaiController.create);

export default router;
