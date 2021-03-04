import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
class Meal extends Model {
  @Column({
    type: DataType.STRING(30),
    primaryKey: true,
    field: 'recurit_id'
  })
  recuritId!: number;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  breakfast!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  lunch!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  dinner!: boolean;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: false
  })
  salary!: boolean;
}