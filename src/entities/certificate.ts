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
    type: DataType.STRING(20),
    allowNull: false
  })
  certificate!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: 'qualification_id'
  })
  qualificationId!: string;
}