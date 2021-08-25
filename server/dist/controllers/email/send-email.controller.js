"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: "devup2332@gmail.com",
            pass: "gqqfmepqcklllfpp",
        },
    });
    const html = yield fs_extra_1.default.readFile(path_1.default.resolve(__dirname, "../../views/email.html"), "utf8");
    const template = handlebars_1.default.compile(html);
    const data = {
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    };
    const emailHTML = template(data);
    const message = {
        from: req.body.email,
        to: "drojasca3530@gmail.com",
        subject: req.body.subject,
        html: emailHTML,
    };
    try {
        yield transporter.sendMail(message);
        return res.status(200).json({
            message: "Email sended",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
});
