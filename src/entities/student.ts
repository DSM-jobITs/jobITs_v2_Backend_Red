import { Model, DataType, Table, Column, BelongsTo } from "sequelize-typescript";
import { Depart } from "./depart";
import { User } from "./user";
import { sequelize } from "../loaders/database";

@Table
export class Student extends Model {
  @Column({
    type: DataType.CHAR(4),
    primaryKey: true,
    field: 'std_no'
  })
  stdNo!: string;

  @Column({
    type: DataType.INTEGER,
    field: 'deaprt_id'
  })
  deptId!: number;

  @Column({
    type: DataType.STRING(15),
    field: 'user_id'
  })
  userId!: string;
  
  @BelongsTo(() => Depart, {
    foreignKey: 'depart_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  depart!: Depart;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  user!: User;
}

Student.init({

}, {
  sequelize,
  tableName: 'student'
});