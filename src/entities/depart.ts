import { Model, DataType, Table, Column, Min, Max, NotEmpty } from "sequelize-typescript";

@Table
class Certificate extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true
  })
  @Min(1)
  @Max(4)
  id!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  @NotEmpty
  dept!: string;
}