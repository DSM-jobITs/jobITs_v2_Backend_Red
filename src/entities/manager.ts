import { Model, DataType, Table, Column } from "sequelize-typescript";
import { IsMobilePhone, IsEmail } from "class-validator";
@Table
class Manager extends Model {
  @Column({
    type: DataType.CHAR(12),
    primaryKey: true,
    field: 'ent_no'
  })
  entNo!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  rank!: string;

  @Column({
    type: DataType.CHAR(14),
    allowNull: false
  })
  @IsMobilePhone("ko-KR")
  phone!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false
  })
  @IsEmail()
  email!: string;
}