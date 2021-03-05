import { Model, DataType, Table, Column, HasOne } from "sequelize-typescript";
import { Student } from "./student";
import { sequelize } from "../loaders/database";

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING(15),
    primaryKey: true,
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

  @HasOne(() => Student, {
    foreignKey: 'user_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  student!: Student;
}

User.init({

}, {
  sequelize,
  tableName: 'user'
});