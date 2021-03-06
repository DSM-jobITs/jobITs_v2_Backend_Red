import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Qualification } from "./qualification";

@Table
export class Specialty extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
    field: "specialty_id"
  })
  specialtyId!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  specialty!: string;

  @ForeignKey(() => Qualification)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "qualification_id"
  })
  qualificationId!: string;

  @BelongsTo(() => Qualification, "qualification_id")
  qualification!: Qualification;
}