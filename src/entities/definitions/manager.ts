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
    allowNull: false,
    field: "manager_rank"
  })
  managerRank!: string;

  @Column({
    type: DataType.CHAR(14),
    allowNull: false,
    field: "manager_phone"
  })
  @IsMobilePhone("ko-KR")
  managerPhone!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "manager_email"
  })
  @IsEmail()
  managerEmail!: string;

  @Column({
    type: DataType.STRING(5),
    allowNull: false
  })
  managerName!: string;

  @BelongsTo(() => Enterprise, "ent_no")
  enterprise!: Enterprise;
}