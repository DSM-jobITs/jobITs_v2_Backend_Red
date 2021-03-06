import { Student } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Student.init({
  stdNo: {
    type: DataType.CHAR(4),
    primaryKey: true,
    field: "std_no"
  },
  deptId: {
    type: DataType.INTEGER,
    field: "depart_id"
  },
  userId: {
    type: DataType.STRING(15),
    field: "user_id"
  }
}, {
  sequelize,
  tableName: "student",
  modelName: "student"
});

export { Student };