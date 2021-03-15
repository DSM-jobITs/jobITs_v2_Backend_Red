import { User } from "./definitions";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../loaders/database";

User.init({
  userId: {
    type: DataType.STRING(30),
    primaryKey: true,
    field: "user_id"
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