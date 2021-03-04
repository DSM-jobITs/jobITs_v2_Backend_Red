import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
export class Specialty extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'specialty_id'
  })
  specialtyId!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  specialty!: string;
}