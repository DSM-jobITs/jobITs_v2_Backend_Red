import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  HasOne
} from "sequelize-typescript";
import { Student } from "./student";
import { sequelize } from "../loaders/database";

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(15),
    field: 'user_id'
  })
  userId!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING(5),
    allowNull: false
  })
  name!: string;

  @HasOne(() => Student, 'user_id')
  student!: Student;
}

User.init({}, {
  sequelize,
  tableName: 'user',
  modelName: 'user'
});

User.hasOne(Student, {
  foreignKey: 'user_id',
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});