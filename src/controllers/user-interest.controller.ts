import UserInterest from "../models/user-interest.model";

export const userInterest = async (req, res, next) => {
  try {
    // get params
    const { userID } = req.params;
    if (!userID)
      return res.status(400).json({ message: "User or post ID not provided" });

    if (userID) {
      // TODO - apply pagination and filters
      const userInterest = await UserInterest.find({
        user: userID,
      }).populate("post");
      return res.status(200).json(userInterest);
    }

    return res.status(400).json({ message: "Invalid request" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const userInterestCreate = async (req, res, next) => {
  try {
    const userInterest = await UserInterest.create(req.body);
    return res.status(200).json(userInterest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
