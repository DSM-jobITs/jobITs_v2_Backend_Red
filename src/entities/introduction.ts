import { Introduction } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Introduction.init({
  introductionId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "introduction_id"
  },
  originalName: {
    type: DataType.STRING,
    allowNull: false,
    field: "original_name"
  },
  fileUuid: {
    type: DataType.STRING(50),
    allowNull: false,
    field: "file_uuid"
  },
  entNo: {
    type: DataType.STRING(12),
    field: "ent_no"
  }
}, {
  sequelize,
  tableName: "introduction",
  modelName: "introduction"
});

export { Introduction };