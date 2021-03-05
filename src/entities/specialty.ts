import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Qualification } from "./qualification";
import { sequelize } from "../loaders/database";

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

  @ForeignKey(() => Qualification)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: 'qualification_id'
  })
  qualificationId!: string;

  @BelongsTo(() => Qualification, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  qualification!: Qualification;
}

Specialty.init({

}, {
  sequelize,
  tableName: 'specialty'  
});