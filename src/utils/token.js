import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return jwt.sign(payload, "secretKey", { expiresIn: "1d" });
};
