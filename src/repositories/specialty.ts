import { Specialty } from "../entities";

export class SpecialtyRepository {
  public static async getSpecialsById(qualificationId: string) {
    return await Specialty.findAll({
      attributes: ['specialty'],
      where: {
        qualificationId
      }
    });
  }
}