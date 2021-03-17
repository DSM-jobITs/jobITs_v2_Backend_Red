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

@Table
export class Qualification extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
    field: "qualification_id"
  })
  qualificationId!: string;

  @Min(1)
  @Max(100)
  @Column(DataType.INTEGER)
  grade!: number;

  @Column(DataType.STRING)
  specialty!: string;

  @ForeignKey(() => Recruit)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "recruit_id"
  })
  recruitId!: string;

  @HasMany(() => Certificate, "qualification_id")
  certificates!: Certificate[];

  @BelongsTo(() => Recruit, "recruit_id")
  recruit!: Recruit;
}