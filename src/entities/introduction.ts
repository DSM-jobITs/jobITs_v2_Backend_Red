import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Enterprise } from "./enterprise";
import { sequelize } from "../loaders/database";

@Table
export class Introduction extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
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

  @BelongsTo(() => Enterprise, 'ent_no')
  enterprise!: Enterprise;
}

Introduction.init({}, {
  sequelize,
  tableName: 'introduction',
  modelName: 'introduction'
});