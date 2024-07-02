import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { ATLAS_CONNECTION, ATLAS_DB_NAME } = process.env;

if (!ATLAS_CONNECTION) {
  throw new Error("MongoDB Atlas connection string is missing in .env file");
}

const connectDB = async () => {
  try {
    await mongoose.connect(ATLAS_CONNECTION, {
      dbName: ATLAS_DB_NAME,
    });
    console.log(
      `MongoDB database ${ATLAS_DB_NAME} connection established successfully`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
