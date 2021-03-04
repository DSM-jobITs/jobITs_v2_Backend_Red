import { Model, DataType, Table, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Enterprise } from "./enterprise";
import { Welfare } from "./welfare";
import { Meal } from "./meal";
import { Qualification } from "./qualification";

@Table
export class Recurit extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'recurit_id'
  })
  recuritId!: string;

  @Column(DataType.CHAR(10))
  reception!: string;

  @Column(DataType.CHAR(10))
  deadline!: string;

  @Column({
    type: DataType.TINYINT,
    field: 'recurit_plan'
  })
  recuritPlan!: boolean;

  @Column({
    type: DataType.CHAR(5),
    field: 'start_time'
  })
  startTime!: string;

  @Column({
    type: DataType.CHAR(5),
    field: 'end_time'
  })
  endTime!: string;

  @Column(DataType.INTEGER)
  salary!: number;

  @Column(DataType.INTEGER)
  period!: number;

  @Column({
    type: DataType.TINYINT,
    defaultValue: false
  })
  expired!: boolean;

  @Column(DataType.INTEGER)
  personnel!: number;
  
  @Column(DataType.STRING)
  detail!: string;

  @Column({
    type: DataType.TINYINT,
    defaultValue: false
  })
  writing!: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1
  })
  page!: number;

  @ForeignKey(() => Enterprise)
  @Column({
    type: DataType.CHAR(12),
    allowNull: false,
    field: 'ent_no'
  })
  entNo!: string;

  @BelongsTo(() => Enterprise, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  enterprise!: Enterprise;

  @HasMany(() => Welfare, {
    foreignKey: 'recurit_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  welfares!: Welfare[];

  @HasMany(() => Meal, {
    foreignKey: 'recurit_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  meals!: Meal[];

  @HasMany(() => Qualification, {
    foreignKey: 'recurit_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  qualifications!: Qualification[];
}