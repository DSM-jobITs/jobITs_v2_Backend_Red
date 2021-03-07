import { Manager } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Manager.init({
  entNo: {
    type: DataType.CHAR(12),
    primaryKey: true,
    field: "ent_no"
  },
  rank: {
    type: DataType.STRING(20),
    allowNull: false
  },
  phone: {
    type: DataType.CHAR(14),
    allowNull: false
  },
  email: {
    type: DataType.STRING(30),
    allowNull: false
  }
}, {
  sequelize,
  tableName: "manager",
  modelName: "manager"
});

export { Manager };