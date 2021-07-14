import { Router } from "express";
import EmailRouter from "./email.routes";

const router = Router();

router.use("/emails", EmailRouter);

export default router;
