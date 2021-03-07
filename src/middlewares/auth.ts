import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";
import { TokenRequired, ForbiddenToken } from "../exception";

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
      next(ForbiddenToken);
    }

    req["decoded"] = decoded;
    next();
  });
};