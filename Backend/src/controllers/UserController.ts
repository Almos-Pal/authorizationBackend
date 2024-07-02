import { Request, Response } from "express";
import UserModel from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
};
