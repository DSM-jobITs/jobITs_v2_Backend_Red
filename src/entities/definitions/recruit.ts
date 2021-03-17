import { 
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  HasOne,
  BelongsTo,
  AutoIncrement
} from "sequelize-typescript";
import { Enterprise } from "./enterprise";
import { Welfare } from "./welfare";
import { Meal } from "./meal";
import { Qualification } from "./qualification";

@Table
export class Recruit extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    field: "recruit_id"
  })
  recruitId!: string;

  @Column(DataType.CHAR(10))
  reception!: string;

  @Column(DataType.CHAR(10))
  deadline!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "recruit_plan"
  })
  recruitPlan!: boolean;

  @Column({
    type: DataType.CHAR(5),
    field: "start_time"
  })
  startTime!: string;

  @Column({
    type: DataType.CHAR(5),
    field: "end_time"
  })
  endTime!: string;

  @Column(DataType.INTEGER)
  salary!: number;

  @Column(DataType.INTEGER)
  period!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  expired!: boolean;

  @Column(DataType.INTEGER)
  personnel!: number;
  
  @Column(DataType.STRING)
  detail!: string;

  @ForeignKey(() => Enterprise)
  @Column({
    type: DataType.CHAR(12),
    allowNull: false,
    field: "ent_no"
  })
  entNo!: string;

  @HasOne(() => Welfare, "recruit_id")
  welfare!: Welfare;

  @HasOne(() => Meal, "recruit_id")
  meal!: Meal;

  @HasOne(() => Qualification, "recruit_id")
  qualification!: Qualification;

  @BelongsTo(() => Enterprise, "ent_no")
  enterprise!: Enterprise;
}