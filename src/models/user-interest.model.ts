import mongoose, { Schema } from "mongoose";
import { IUserInterest, IUserPosts } from "../interfaces/user-post.interface";

const userInterestSchema = new Schema<IUserInterest>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserInterest = mongoose.model<IUserPosts>(
  "UserInterest",
  userInterestSchema
);
export default UserInterest;
