import { Certificate } from "../entities";

export class CertificateRepository {
  public static async getCertificatesById(qualificationId) {
    return await Certificate.findAll({
      where: {
        qualificationId
      }
    });
  }
}