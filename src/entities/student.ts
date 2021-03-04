import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
class Student extends Model {
  @Column({
    type: DataType.CHAR(4),
    primaryKey: true,
    field: 'std_no'
  })
  stdNo!: string;
}