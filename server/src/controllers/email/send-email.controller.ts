import { Request, Response } from "express";
import hbs from "handlebars";
import nodemailer from "nodemailer";
import fs from "fs-extra";
import path from "path";

export default async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devup2332@gmail.com",
      pass: "gqqfmepqcklllfpp",
    },
  });

  const html = await fs.readFile(
    path.resolve(__dirname, "../../views/email.html"),
    "utf8"
  );
  const template = hbs.compile(html);
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

  transporter.sendMail(message, (err, inf) => {
    if (err) {
      console.log({ ...err });
    } else {
      console.log(inf);
    }
  });
  return res.json({
    message: "Email sended",
  });
};
