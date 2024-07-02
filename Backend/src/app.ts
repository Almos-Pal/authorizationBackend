import express from "express";
import errorHandler from "./middleware/errorHandler";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/users", homeRoutes);
app.use("/auth", authRoutes);
app.use(errorHandler);

export default app;
