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
export class Meal extends Model {
  @PrimaryKey
  @ForeignKey(() => Recruit)
  @Column({
    type: DataType.STRING(30),
    field: "recruit_id"
  })
  recruitId!: number;

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

  @BelongsTo(() => Recruit, "recruit_id")
  recruit!: Recruit;
}