import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Passowrd required"],
  },
});
export default mongoose.model("User", UserSchema);
