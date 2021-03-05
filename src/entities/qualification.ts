import { Model, DataType, Table, Column, Min, Max, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Recruit } from "./recruit";
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

  @Min(1)
  @Max(100)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  grade!: number;

  @ForeignKey(() => Recruit)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: 'recruit_id'
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

  @BelongsTo(() => Recruit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recruit!: Recruit;
}