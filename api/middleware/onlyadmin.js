import jwt from "jsonwebtoken";

export const onlyadmin = async (req, res, next) => {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid or expired token" });
      }

      if (decoded.role !== "admin") {
        return res
          .status(403)
          .json({ success: false, message: "Access denied: Admins only" });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error: " + error.message });
  }
};
