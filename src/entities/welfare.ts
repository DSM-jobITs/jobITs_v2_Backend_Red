import { Welfare } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Welfare.init({
  recruitId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "recruit_id"
  },
  fourMajor: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: "four_major"
  },
  selfDevelop: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: "self_develop"
  },
  laptop: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  etc: DataType.STRING
}, {
  sequelize,
  tableName: "welfare",
  modelName: "welfare"
});

export { Welfare };