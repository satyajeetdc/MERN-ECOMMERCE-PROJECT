import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

// middleware for admin only routes
export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;
  if (!id)
    return next(
      new ErrorHandler("Please log in to access this resource.", 401)
    );

  const user = await User.findById(id);
  if (!user)
    return next(
      new ErrorHandler(
        "User not found. Please check your login credentials.",
        401
      )
    );

  if (user.role !== "admin")
    return next(
      new ErrorHandler(
        "Access denied. This resource is restricted to administrators only.",
        403
      )
    );

  next();
});
