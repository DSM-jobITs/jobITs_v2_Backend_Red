import { Model, DataType, Table, Column, BelongsTo } from "sequelize-typescript";
import { Qualification } from "./qualification";

@Table
export class Certificate extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'certificate_id'
  })
  certificateId!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  certificate!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: 'qualification_id'
  })
  qualificationId!: string;

  @BelongsTo(() => Qualification, "id")
  qualification!: Qualification;
}