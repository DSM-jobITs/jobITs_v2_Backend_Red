import { Certificate } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Certificate.init({
  certificateId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "certificate_id"
  },
  certificate: {
    type: DataType.STRING(40),
    allowNull: false
  },
  qualificationId: {
    type: DataType.STRING(30),
    allowNull: false,
    field: "qualification_id"
  }
}, {
  sequelize,
  tableName: "certificate",
  modelName: "certificate"
});

export { Certificate };