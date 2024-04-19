import Post from "../models/post.model";
import UserPost from "../models/user-post.model";
import User from "../models/user.model";

export const postList = async (req, res, next) => {
  try {
    const posts = await Post.find();
    // TODO: Give pagination, sorting, and filtering options
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postCreate = async (req, res, next) => {
  try {
    const userID = req.body.userID;
    // check if user exists
    if (!userID)
      return res.status(400).json({ message: "User ID is required" });

    const user = await User.findOne({
      _id: userID,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const postPayload = {
      ...req.body,
      user: userID,
      contactPhoneNumber: user.phoneNumber,
      contactEmail: user.email,
    };

    const post = await Post.create(postPayload);
    await UserPost.create({
      user: userID,
      post: post._id,
    });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postUpdate = async (req, res, next) => {
  try {
    const postID = req.params.postID;

    const post = await UserPost.findOne({
      post: postID,
    });

    if (!post || !post._id)
      return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== req.body.userID)
      return res.status(401).json({ message: "Unauthorized" });

    await Post.updateOne({ _id: post.post }, req.body);

    return res.status(200).json({ message: "post updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
