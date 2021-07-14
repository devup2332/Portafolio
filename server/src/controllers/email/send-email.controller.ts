import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  console.log(req.body);
  return res.json({
    message: "Email sended",
  });
};
