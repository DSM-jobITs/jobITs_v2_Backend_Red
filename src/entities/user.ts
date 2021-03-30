import { User } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

User.init({
  id: {
    type: DataType.STRING(30),
    primaryKey: true
  },
  password: {
    type: DataType.STRING(60),
    allowNull: false
  },
  name: {
    type: DataType.STRING(10),
    allowNull: false
  }
}, {
  sequelize,
  tableName: "user",
  modelName: "user"
});

export { User };