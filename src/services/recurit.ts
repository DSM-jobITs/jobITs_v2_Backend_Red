import { RecuritRepository } from "../repositories";
import { RecuritNotFound } from "../exception";
import { getRecuritResponse } from "../interfaces";


export class RecuritService {
  constructor(
    private recuritRepository: RecuritRepository,
    private recuritResponse: getRecuritResponse
  ) {}

  public async getRecuritInfoById(recuritId: string): Promise<object> {
    const recuritInfo = await this.recuritRepository.getRecuritInfoById(recuritId);
    if (!recuritInfo) {
      throw RecuritNotFound;
    }
    return recuritInfo;
  }
}