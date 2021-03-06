import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  Min,
  Max,
  HasMany
} from "sequelize-typescript";
import { IsNotEmpty } from "class-validator";
import { Student } from "./student";
import { sequelize } from "../loaders/database";

@Table
export class Depart extends Model {
  @Min(1)
  @Max(4)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    field: 'depart_id'
  })
  departId!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  @IsNotEmpty()
  dept!: string;

  @HasMany(() => Student, 'depart_id')
  students!: Student[];
}

Depart.init({}, {
  sequelize,
  tableName: 'depart',
  modelName: 'depart'
});