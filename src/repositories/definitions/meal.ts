import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { MealAttributes } from "../../entities";

export class MealRepository extends Model<MealAttributes, "recuritId"> {

}

MealRepository.init({
  recuritId: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  breakfast: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  lunch: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dinner: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  salary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  tableName: 'meal'
});