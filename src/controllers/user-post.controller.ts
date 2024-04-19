import Post from "../models/post.model";
import UserPost from "../models/user-post.model";

export const userPosts = async (req, res, next) => {
  try {
    // get params
    const { userID } = req.params;
    if (!userID)
      return res.status(400).json({ message: "User or post ID not provided" });

    if (userID) {
      // TODO - apply pagination and filters

      const { limit, page } = req.query;

      const userPosts = await UserPost.find({
        user: userID,
      })
        .populate("post")
        .limit(limit)
        .skip(page);
      return res.status(200).json(userPosts);
    }

    return res.status(400).json({ message: "Invalid request" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const userDelete = async (req, res, next) => {
  try {
    const { userID, postID } = req.params;

    if (!userID || !postID)
      return res.status(400).json({ message: "User or post ID not provided" });

    const userPost = await UserPost.findOne({
      user: userID,
      post: postID,
    });

    if (!userPost || !userPost._id)
      return res.status(404).json({ message: "Post not found" });

    if (userPost.user.toString() !== userID)
      return res.status(401).json({ message: "Unauthorized" });

    await UserPost.updateOne({ _id: userPost._id }, { deleted: true });
    await Post.updateOne({ _id: postID }, { deleted: true });

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
