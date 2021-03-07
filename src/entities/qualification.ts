import { Qualification } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Qualification.init({
  qualificationId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "qualification_id"
  },
  grade: {
    type: DataType.INTEGER,
    allowNull: false
  },
  recruitId: {
    type: DataType.STRING(30),
    allowNull: false,
    field: "recruit_id"
  }
}, {
  sequelize,
  tableName: "qualification",
  modelName: "qualification"
});

export { Qualification };