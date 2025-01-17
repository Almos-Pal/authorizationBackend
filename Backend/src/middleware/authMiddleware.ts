import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  userId: string;
}

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ACCESS_SECRET } = process.env;

  const token = req.cookies.jwt;

  if (!token) {
    return verifyRefreshToken(req, res, next);
  }

  try {
    const decoded = jwt.verify(token, ACCESS_SECRET) as DecodedToken;
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return verifyRefreshToken(req, res, next);
  }
};

export const verifyRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { REFRESH_SECRET, ACCESS_SECRET, ACCESS_TOKEN_EXPIRES_IN } =
      process.env;
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET) as DecodedToken;

    const userId = decoded.userId;
    const newAccessToken = jwt.sign({ userId }, ACCESS_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });

    res.cookie("jwt", newAccessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    });

    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};
