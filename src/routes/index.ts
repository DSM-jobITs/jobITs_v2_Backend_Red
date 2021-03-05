import { Router } from "express";
import recurit from "./recurit";

export default () => {
  const app = Router();
  
  recurit(app);

  return app;
};