import { Manager } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Manager.init({
  entNo: {
    type: DataType.CHAR(12),
    primaryKey: true,
    field: "ent_no"
  },
  managerRank: {
    type: DataType.STRING(20),
    allowNull: false,
    field: "manager_rank"
  },
  managerPhone: {
    type: DataType.CHAR(14),
    allowNull: false,
    field: "manager_phone"
  },
  managerEmail: {
    type: DataType.STRING(30),
    allowNull: false,
    field: "manager_email"
  }
}, {
  sequelize,
  tableName: "manager",
  modelName: "manager"
});

export { Manager };