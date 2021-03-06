import { Specialty } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Specialty.init({
  specialtyId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "specialty_id"
  },
  specialty: {
    type: DataType.STRING(20),
    allowNull: false
  },
  qualificationId: {
    type: DataType.STRING(30),
    allowNull: false,
    field: "qualification_id"
  }
}, {
  sequelize,
  tableName: "specialty",
  modelName: "specialty"
});

export { Specialty };