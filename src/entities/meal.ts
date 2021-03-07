import { Meal } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Meal.init({
  recruitId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "recruit_id"
  },
  breakfast: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  lunch: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dinner: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  salary: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  tableName: "meal",
  modelName: "meal"
});

export { Meal };