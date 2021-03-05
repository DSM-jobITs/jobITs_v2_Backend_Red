import { Schema } from "joi";
import { BadRequest } from "../exception";
import { Request, Response, NextFunction } from "express";
import logger from "../loaders/logger";

export default ({
  schema,
  parameters
}: {
  schema: Schema;
  parameters: string;
}) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req[parameters]);
    next();
  } catch (error) {
    logger.error(error);
    next(BadRequest);
  }
};