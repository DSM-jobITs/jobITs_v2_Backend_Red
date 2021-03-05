import { Router } from "express";
import { tryCatchMiddleware } from "../middlewares";
import validate from "../middlewares/validation";
import { RecruitController } from "../controllers";
import { recruitIdSchema } from "../schemas";

const router = Router();

export default (app: Router) => {
  const recuritController: RecruitController = new RecruitController();

  app.use('/recruit', router);

  router.get(
    '/:recruitId',
    validate({ schema: recruitIdSchema, parameters: 'recruitId'}),
    tryCatchMiddleware.Error(recuritController.getRecuritInfoById)
  );
};