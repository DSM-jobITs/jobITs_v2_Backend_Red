import { QualificationRepository } from "repositories";
import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo
} from "sequelize-typescript";


@Table
class Certificate extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true
  })
  id!: string;

  @Column({
    type: DataType.STRING(20)
  })
  certificate!: string;

  @Column({
    type: DataType.STRING(30),
    field: 'qualification_id'
  })
  qualificationId!: string;
}