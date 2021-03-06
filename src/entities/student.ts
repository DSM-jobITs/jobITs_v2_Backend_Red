import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  BelongsTo
} from "sequelize-typescript";
import { Depart } from "./depart";
import { User } from "./user";

@Table
export class Student extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(4),
    field: 'std_no'
  })
  stdNo!: string;

  @Column({
    type: DataType.INTEGER,
    field: 'deaprt_id'
  })
  deptId!: number;

  @Column({
    type: DataType.STRING(15),
    field: 'user_id'
  })
  userId!: string;
  
  @BelongsTo(() => Depart, 'depart_id')
  depart!: Depart;

  @BelongsTo(() => User, 'user_id')
  user!: User;
}