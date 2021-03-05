import { RecruitRepository } from "../repositories";
import { RecuritNotFound } from "../exception";
import { getRecruitResponse } from "../interfaces";


export class RecuritService {
  constructor(
    private recruitRepository: RecruitRepository,
    private recuritResponse: getRecruitResponse
  ) {}

  public async getRecruitInfoById(recruitId: string): Promise<object> {
    const recruitInfo = await this.recruitRepository.getRecruitInfoById(recruitId);
    if (!recruitInfo) {
      throw RecuritNotFound;
    }
    return recruitInfo;
  }
}