import { Router } from "express";
import recruit from "./recruit";

export default () => {
  const app = Router();

  recruit(app);

  return app;
};