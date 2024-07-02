import { Request, Response, NextFunction } from "express";

const errorHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Internal Server Error!");
};

export default errorHandler;
