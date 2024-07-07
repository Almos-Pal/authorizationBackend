import { Router } from "express";
import { getUserById, getUsers } from "../controllers/UserController";
import { verifyToken, verifyRefreshToken } from "../middleware/authMiddleware";

const router = Router();

router.route("/").get(verifyRefreshToken, verifyToken, getUsers);

router.route("/:id").get(getUserById);

export default router;
