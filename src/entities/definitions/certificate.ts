import { 
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Qualification } from "./qualification";

@Table
export class Certificate extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING(30),
    field: "certificate_id"
  })
  certificateId!: string;

  @Column({
    type: DataType.STRING(40),
    allowNull: false
  })
  certificate!: string;

  @ForeignKey(() => Qualification)
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "qualification_id"
  })
  qualificationId!: string;

  @BelongsTo(() => Qualification, "qualification_id")
  qualification!: Qualification;
}