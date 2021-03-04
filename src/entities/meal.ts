import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Recurit } from "./recurit";

@Table
export class Meal extends Model {
  @ForeignKey(() => Recurit)
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'recurit_id'
  })
  recuritId!: number;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  breakfast!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  lunch!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  dinner!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  salary!: boolean;

  @BelongsTo(() => Recurit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recurit!: Recurit;
}