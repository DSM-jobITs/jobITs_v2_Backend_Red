import { RecruitService } from "../services";
import { RecruitRepository } from "../repositories";
import { getRecruitResponse } from "../interfaces";
import { Request, Response, NextFunction } from "express";

export class RecuritController {
  public async getRecuritInfoById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const recruitId = req.params.recruitId;
    const result = await new RecruitService(
      new RecruitRepository(),
      {} as getRecruitResponse
      ).getRecruitInfoById(recruitId);
    
    res.status(200).json(result);
  }
}