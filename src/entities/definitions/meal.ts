import {
  Model,
  DataType,
  Table,
  Column,
  Default,
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

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  breakfast!: boolean;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  lunch!: boolean;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  dinner!: boolean;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  salary!: boolean;

  @BelongsTo(() => Recruit, "recruit_id")
  recruit!: Recruit;
}