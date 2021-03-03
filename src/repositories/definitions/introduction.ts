import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { IntroductionAttributes } from "../../interfaces";

export class IntroductionRepository extends Model<IntroductionAttributes, "id"> {

}

IntroductionRepository.init({
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  originalName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'original_name'
  },
  fileUuid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'file_uuid'
  },
  entNo: {
    type: DataTypes.STRING(12),
    allowNull: false,
    field: 'ent_no'
  }
}, {
  sequelize,
  tableName: 'introduction'
});