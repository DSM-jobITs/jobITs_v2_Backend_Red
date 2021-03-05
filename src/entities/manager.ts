import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { IsMobilePhone, IsEmail } from "class-validator";
import { Enterprise } from "./enterprise";
import { sequelize } from "../loaders/database";

@Table
export class Manager extends Model {
  @ForeignKey(() => Enterprise)
  @Column({
    type: DataType.CHAR(12),
    primaryKey: true,
    field: 'ent_no'
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

  @BelongsTo(() => Enterprise, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  enterprise!: Enterprise;
}

Manager.init({

}, {
  sequelize,
  tableName: 'Manager'
});