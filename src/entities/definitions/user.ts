import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  HasOne
} from "sequelize-typescript";
import { Student } from "./student";

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
    field: "user_id"
  })
  userId!: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false
  })
  name!: string;

  @HasOne(() => Student, "user_id")
  student!: Student;
}