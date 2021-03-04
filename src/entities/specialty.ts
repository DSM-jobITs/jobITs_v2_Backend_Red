import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
class Specialty extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true
  })
  id!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  specialty!: string;
}