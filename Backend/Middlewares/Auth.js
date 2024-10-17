import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  console.log("Auth Middleware : Request body:", req.body);
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized login again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error("JWT Verification Eror:", error.message);
    res.status(401).json({ success: false, message: error.message });
    console.log("Received Token:", token);
  }
};

export default authMiddleware;
