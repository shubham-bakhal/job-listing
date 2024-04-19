import User from "../models/user.model";

export const userByEmail = async (req, res, next) => {
  try {
    // get query params from request
    console.log("query", req.query);

    const user = await User.findOne({ email: req.query.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const userCreate = async (req, res, next) => {
  try {
    // check if user already exists
    console.log("Request body", req.body);

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log("Error", error);

    return res.status(500).json({ message: error.message });
  }
};
