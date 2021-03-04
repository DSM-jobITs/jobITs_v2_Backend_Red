import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
class Introduction extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true
  })
  id!: number;

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
}