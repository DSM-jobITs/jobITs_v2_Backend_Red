import { Model, DataType, Table, Column, Min, Max } from "sequelize-typescript";

@Table
class Qualification extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true
  })
  id!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  @Min(1)
  @Max(100)
  grade!: number;
}