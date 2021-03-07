import { Schema } from "joi";
import { BadRequest } from "../exception";
import { Request, Response, NextFunction } from "express";

export default ({
  schema
}: {
  schema: Schema;
}) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error) {
    next(BadRequest);
  }
};