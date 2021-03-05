import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Enterprise } from "./enterprise";
import { sequelize } from "../loaders/database";

@Table
export class Introduction extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'introduction_id'
  })
  introductionId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'original_name'
  })
  originalName!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: 'file_uuid'
  })
  fileUuid!: string;

  @ForeignKey(() => Enterprise)
  @Column({
    type: DataType.STRING(12),
    field: 'ent_no'
  })
  entNo!: string;

  @BelongsTo(() => Enterprise, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  enterprise!: Enterprise;
}

Introduction.init({

}, {
  sequelize,
  tableName: 'introduction'
});