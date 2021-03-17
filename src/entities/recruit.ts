import { Recruit } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Recruit.init({
  recruitNo: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "recruit_no"
  },
  recruitId: {
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
    field: "recruit_id"
  },
  reception: DataType.CHAR(10),
  deadline: DataType.CHAR(10),
  recruitPlan: {
    type: DataType.BOOLEAN,
    field: "recruit_plan"
  },
  startTime: {
    type: DataType.CHAR(5),
    field: "start_time"
  },
  endTime: {
    type: DataType.CHAR(5),
    field: "end_time"
  },
  salary: DataType.INTEGER,
  period: DataType.INTEGER,
  expired: {
    type: DataType.BOOLEAN,
    defaultValue: false
  },
  personnel: DataType.INTEGER,
  detail: DataType.STRING,
  entNo: {
    type: DataType.CHAR(12),
    allowNull: false,
    field: "ent_no"
  }
}, {
  sequelize,
  tableName: "recruit",
  modelName: "recruit"
});

export { Recruit };