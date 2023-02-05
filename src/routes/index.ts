import { Router } from "express";
import openaiRoute from "./openai.route";

const router = Router();

router.use("/openai", openaiRoute);

export default router;
