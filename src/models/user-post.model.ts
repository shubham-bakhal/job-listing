import mongoose, { Schema } from "mongoose";
import { IUserPosts } from "../interfaces/user-post.interface";

const userPostSchema = new Schema<IUserPosts>(
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

const UserPost = mongoose.model<IUserPosts>("UserPost", userPostSchema);
export default UserPost;
