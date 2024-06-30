import { Request, Response } from "express";

export const getHome = (req: Request, res: Response): void => {
  res.send("lol");
};
