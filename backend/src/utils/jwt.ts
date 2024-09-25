import jwt from "jsonwebtoken";
const TOKENPASS = process.env.TOKENPASS || "";
export const generateToken = (payload: object) => {
  return jwt.sign(payload, TOKENPASS, {
    expiresIn: "1h",
  });
};
export const decodeToken = (token: string) => {
  return jwt.verify(token, TOKENPASS);
};
