import { RecuritService } from "../services";
import { RecuritRepository } from "../repositories";
import { getRecuritResponse } from "../interfaces";
import { Request, Response, NextFunction } from "express";

export class RecuritController {
  public async getRecuritInfoById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const recuritId = req.params.recuritId;
    const result = await new RecuritService(
      new RecuritRepository(),
      {} as getRecuritResponse
      ).getRecuritInfoById(recuritId);
    
    res.status(200).json(result);
  }
}