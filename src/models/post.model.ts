import mongoose, { Schema } from "mongoose";
import { IPost } from "../interfaces/post.interface";

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    contactPhoneNumber: { type: String, required: true },
    contactEmail: { type: String, required: true },
    archived: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
