import { Router } from "express";
import SendEmail from "../controllers/email/send-email.controller";

const router = Router();

router.post("/send", SendEmail);

export default router;
