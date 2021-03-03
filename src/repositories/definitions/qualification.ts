import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { QualificationAttributes } from "../../entities";

export class QualificationRepository extends Model<QualificationAttributes, "id"> {

}

QualificationRepository.init({
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recuritId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'recurit_id'
  }
}, {
  sequelize,
  tableName: 'qualification'
})