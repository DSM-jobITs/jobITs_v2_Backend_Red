import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { IsMobilePhone, IsEmail } from "class-validator";
import { Enterprise } from "./enterprise";

@Table
export class Manager extends Model {
  @PrimaryKey
  @ForeignKey(() => Enterprise)
  @Column({
    type: DataType.CHAR(12),
    field: "ent_no"
  })
  entNo!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  rank!: string;

  @Column({
    type: DataType.CHAR(14),
    allowNull: false
  })
  @IsMobilePhone("ko-KR")
  phone!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false
  })
  @IsEmail()
  email!: string;

  @BelongsTo(() => Enterprise, "ent_no")
  enterprise!: Enterprise;
}