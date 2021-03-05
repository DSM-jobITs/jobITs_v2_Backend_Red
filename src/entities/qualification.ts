import { Model, DataType, Table, Column, Min, Max, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Recurit } from "./recurit";
import { Certificate } from "./certificate";
import { Specialty } from "./specialty";

@Table
export class Qualification extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'qualification_id'
  })
  qualificationId!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  @Min(1)
  @Max(100)
  grade!: number;

  @ForeignKey(() => Recurit)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: 'recurit_id'
  })
  recuritId!: string;

  @HasMany(() => Certificate, {
    foreignKey: 'qualification_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  certificates!: Certificate[];

  @HasMany(() => Specialty, {
    foreignKey: 'qualification_id',
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  specialties!: Specialty[];

  @BelongsTo(() => Recurit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recurit!: Recurit;
}