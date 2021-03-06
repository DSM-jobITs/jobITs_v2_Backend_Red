import { Depart } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Depart.init({
  departId: {
    type: DataType.INTEGER,
    primaryKey: true,
    field: "depart_id"
  },
  dept: {
    type: DataType.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  tableName: "dept",
  modelName: "dept"
});

export { Depart };