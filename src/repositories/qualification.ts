import { Qualification } from "../entities";
import { CertificateRepository } from "./certificate";
import { SpecialtyRepository } from "./specialty";

export class QualificationRepository {
  public static async getGradeById(qualificationId: string) {
    return await Qualification.findOne({
      attributes: ['grade'],
      where: {
        qualificationId
      }
    });
  }

  public static async getQualificationById(qualificationId: string) {
    const qualification = {
      certificate: await CertificateRepository.getCertificatesById(qualificationId),
      grade: await this.getGradeById(qualificationId),
      specialty: await SpecialtyRepository.getSpecialsById(qualificationId)
    };
    return qualification;
  }
}