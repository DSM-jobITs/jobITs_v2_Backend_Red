import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Recurit } from "./recurit";

@Table
export class Welfare extends Model {
  @ForeignKey(() => Recurit)
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'recurit_id'
  })
  recuritId!: string;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false,
    field: 'four_major'
  })
  fourMajor!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false,
    field: 'self_develop'
  })
  selfDevelop!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  laptop!: boolean;

  @Column(DataType.STRING)
  etc!: string;

  @BelongsTo(() => Recurit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recurit!: Recurit
}