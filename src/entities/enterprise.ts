import { Enterprise } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

Enterprise.init({
  entNo: {
    type: DataType.CHAR(12),
    primaryKey: true,
    field: "ent_no"
  },
  name: {
    type: DataType.STRING(30),
  },
  phone: DataType.CHAR(13),
  establishmentDate: {
    type: DataType.STRING(15),
    field: "establishment_date"
  },
  sales: DataType.FLOAT,
  introduce: DataType.STRING(1000),
  sector: {
    type: DataType.STRING(50),
    defaultValue: "정보통신업"
  },
  address: DataType.STRING(40),
  zipCode: {
    type: DataType.CHAR(5),
    field: "zip_code"
  },
  workers: DataType.INTEGER
}, {
  sequelize,
  tableName: "enterprise",
  modelName: "enterprise"
});

export { Enterprise };