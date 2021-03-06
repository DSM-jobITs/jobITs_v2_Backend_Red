import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Min,
  Max,
  HasMany,
  BelongsTo
} from "sequelize-typescript";
import { Recruit } from "./recruit";
import { Certificate } from "./certificate";
import { Specialty } from "./specialty";
import { sequelize } from "../loaders/database";

@Table
export class Qualification extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
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
  recruitId!: string;

  @HasMany(() => Certificate, 'qualification_id')
  certificates!: Certificate[];

  @HasMany(() => Specialty, 'qualification_id')
  specialties!: Specialty[];

  @BelongsTo(() => Recruit, 'recruit_id')
  recruit!: Recruit;
}

Qualification.init({}, {
  sequelize,
  tableName: 'qualification',
  modelName: 'qualification'
});

// Qualification.hasMany(Certificate, {
//   foreignKey: 'qualification_id',
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE"
// });

// Qualification.hasMany(Specialty, {
//   foreignKey: 'qualification_id',
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE"
// });