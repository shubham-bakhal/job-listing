import { IUserRole } from "../interfaces/user.interface";
import User from "../models/user.model";

const adminRoutesMiddleWare = async (req, res, next) => {
  try {
    const userID = req.body.userID;

    const user = await User.findOne({
      _id: userID,
    });

    if (!user || user.role !== IUserRole.ADMIN) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default adminRoutesMiddleWare;
