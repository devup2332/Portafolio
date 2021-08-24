"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var send_email_controller_1 = __importDefault(require("../controllers/email/send-email.controller"));
var router = express_1.Router();
router.post("/send", send_email_controller_1.default);
exports.default = router;
