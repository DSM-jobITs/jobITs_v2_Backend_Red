import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { ManagerAttributes } from "../../entities";

export class ManagerRepository extends Model<ManagerAttributes, "entNo"> {

}

ManagerRepository.init({
  entNo: {
    type: DataTypes.CHAR(12),
    primaryKey: true,
    field: 'ent_no'
  },
  rank: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  phone: {
    type: DataTypes.CHAR(14),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'manager'
});