import "reflect-metadata";
import express from "express";
import loader from "./loaders";
import config from "./config";
import logger from "./loaders/logger";

const app = express();

loader(app);

app.listen(config.port, () => {
  logger.info(`Server listening on ${config.port}`);
});