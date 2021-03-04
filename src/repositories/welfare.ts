import { Welfare } from "../entities";

export class WelfareRepository {
  public static async getWelfareInfoById(recuritId: string) {
    return await Welfare.findOne({
      attributes: ['fourMajor', 'selfDevelop', 'labtop', 'etc'],
      where: {
        recuritId
      }
    });
  }
}