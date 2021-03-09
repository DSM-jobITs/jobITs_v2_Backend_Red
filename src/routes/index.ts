import { Router } from "express";
import recruit from "./recruit";

export default () => {
  const app = Router();
  console.log("get routing");
  recruit(app);

  return app;
};