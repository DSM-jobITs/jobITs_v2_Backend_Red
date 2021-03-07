import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";
import { TokenRequired } from "../exception";
import logger from "../loaders/logger";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization || "";
  if (!token) {
    next(TokenRequired);
  }

  const bearer: string = token.split("Bearer ")[1];
  verify(bearer, config.secertKey, (err, decoded) => {
    if (err) {
      logger.error(`403: ${err.message}`);
      res.status(403).json({ message: "Forbidden Token" });
    }

    req["decoded"] = decoded;
    next();
  });
};