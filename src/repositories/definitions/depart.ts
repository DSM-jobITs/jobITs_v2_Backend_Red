import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { DepartAttributes } from "../../entities";

export class DepartRepository extends Model<DepartAttributes, "id"> {

}

DepartRepository.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  dept: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'dept'
});