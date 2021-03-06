import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Recruit } from "./recruit";

@Table
export class Welfare extends Model {
  @ForeignKey(() => Recruit)
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
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

  @BelongsTo(() => Recruit, "recruit_id")
  recruit!: Recruit
}