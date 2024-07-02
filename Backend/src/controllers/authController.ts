import { Request, Response } from "express";
import UserModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { userName, password, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Passwords do not match",
      });
    }

    const user = await UserModel.create({
      userName: userName,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "created",
      data: {
        user,
      },
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const {
      JWT_COOKIE_EXPIRES_IN,
      ACCESS_SECRET,
      REFRESH_SECRET,
      REFRESH_TOKEN_EXPIRES_IN,

      ACCESS_TOKEN_EXPIRES_IN,
    } = process.env;

    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });
    const cookieOptions = {
      expires: new Date(
        Date.now() + parseInt(REFRESH_TOKEN_EXPIRES_IN!) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Authentication failed, user not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        status: "fail",
        message: "Authentication failed, passwords are not matching",
      });
    }

    const accessToken = jwt.sign({ userId: user._id }, ACCESS_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
    const refreshToken = jwt.sign({ userId: user._id }, REFRESH_SECRET!, {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN!,
    });

    res.cookie("jwt", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
