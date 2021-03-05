import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Recruit } from "./recruit";
import { sequelize } from "../loaders/database";

@Table
export class Welfare extends Model {
  @ForeignKey(() => Recruit)
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'recruit_id'
  })
  recruitId!: string;

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

  @BelongsTo(() => Recruit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recruit!: Recruit
}

Welfare.init({

}, {
  sequelize,
  tableName: 'welfare'
})