import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      index: {
        unique: true,
      },
      lowercase: true,
      trim: true,
    },
    phoneNumber: { type: String, required: true },
    company: { type: String, optional: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
