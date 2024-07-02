import express from "express";
import errorHandler from "./middleware/errorHandler";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB";

const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/users", homeRoutes);
app.use("/auth", authRoutes);
app.use(errorHandler);

export default app;
