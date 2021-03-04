import { Model, DataType, Table, Column, Min, Max, HasMany } from "sequelize-typescript";
import { IsNotEmpty } from "class-validator";
import { Student } from "./student";

@Table
export class Depart extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'depart_id'
  })
  @Min(1)
  @Max(4)
  departId!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  @IsNotEmpty()
  dept!: string;

  @HasMany(() => Student, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  students!: Student[];
}