import express from "express";
import errorHandler from "./middleware/errorHandler";
import homeRoutes from "./routes/homeRoutes";

const app = express();

app.use(express.json());
app.use("/", homeRoutes);
app.use(errorHandler);

export default app;
