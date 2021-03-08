import { Router } from "express";
import { authMiddleware, tryCatchMiddleware } from "../middlewares";
import validate from "../middlewares/validation";
import { RecruitController } from "../controllers";
import { recruitIdSchema } from "../schemas";

const router = Router();

export default (app: Router) => {
  const recuritController: RecruitController = new RecruitController();

  app.use('/recruit/detail', router);
  console.log('Get request successly.');
  router.get(
    '/:recruitId',
    authMiddleware,
    validate({ schema: recruitIdSchema }),
    tryCatchMiddleware.Error(recuritController.getRecuritInfoById)
  );
};
