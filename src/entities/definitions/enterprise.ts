import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  HasMany,
  HasOne,
  Min,
  Default
} from "sequelize-typescript";
import { Recruit } from "./recruit";
import { Introduction } from "./introduction";
import { Manager } from "./manager";

@Table
export class Enterprise extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(12),
    field: "ent_no"
  })
  entNo!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false
  })
  name!: string;

  @Column(DataType.CHAR(13))
  phone!: string;

  @Column({
    type: DataType.STRING(15),
    field: "establishment_date"
  })
  establishmentDate!: string;

  @Column(DataType.FLOAT)
  sales!: number;

  @Column(DataType.STRING(1000))
  introduce!: string;

  @Default("정보통신업")
  @Column(DataType.STRING(50))
  sector!: string;

  @Column(DataType.STRING(40))
  address!: string;

  @Column({
    type: DataType.CHAR(5),
    field: "zip_code"
  })
  zipCode!: string;

  @Min(1)
  @Column(DataType.INTEGER)
  workers!: number;

  @HasMany(() => Recruit, "ent_no")
  recruits!: Recruit[];

  @HasMany(() => Introduction, "ent_no")
  introductions!: Introduction[];

  @HasOne(() => Manager, "ent_no")
  manager!: Manager;
}