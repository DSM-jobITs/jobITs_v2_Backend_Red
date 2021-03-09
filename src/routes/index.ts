import { Router } from "express";
import recruit from "./recruit";

export default () => {
  const app = Router();
  app.use('/ping', (req, res, next) => {
    res.send('pong');
  });
  recruit(app);

  return app;
};