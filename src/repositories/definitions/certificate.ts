import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { CertificateAttributes } from "../../interfaces";

export class CertificateRepository extends Model<CertificateAttributes, "id"> {

}

CertificateRepository.init({
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  certificate: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  qualificationId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'qualification_id'
  }
}, {
  sequelize,
  tableName: 'certificate'
});