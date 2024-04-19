import { IPost } from "./post.interface";
import { IUser } from "./user.interface";

export interface IUserPosts {
  user: IUser;
  post: IPost;
  deleted: boolean;
}

export interface IUserInterest {
  user: IUser;
  post: IPost;
  deleted: boolean;
}
