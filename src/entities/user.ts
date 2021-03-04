import { Model, DataType, Table, Column } from "sequelize-typescript";

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING(15),
    primaryKey: true,
    field: 'user_id'
  })
  userId!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING(5),
    allowNull: false
  })
  name!: string;
}