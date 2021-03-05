import { Router } from "express";
import { tryCatchMiddleware } from "../middlewares";
import validate from "../middlewares/validation";
import { RecuritController } from "../controllers";
import { recuritIdSchema } from "../schemas";

const router = Router();

export default (app: Router) => {
  const recuritController: RecuritController = new RecuritController();

  app.use('/recurit', router);

  router.get(
    '/:recuritId',
    validate({ schema: recuritIdSchema, parameters: 'recuritId'}),
    tryCatchMiddleware.Error(recuritController.getRecuritInfoById)
  );
};