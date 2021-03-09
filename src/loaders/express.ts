import * as express from "express";
import morgan from "morgan";
import cors from "cors";
import { ApiNotFound } from "../exception";
import logger from "./logger";
import router from "../routes";

export default (app: express.Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));

  app.use('/', router());

  app.use((req, res, next) => {
    next(ApiNotFound);
  });
  app.use((err, req, res, next) => {
    logger.error(
      `${err.status}: ${err.message}`
    );
    res.status(err.status || 500);
    res.json({ message: err.message });
  });
};
