import {
  Model,
  DataType,
  Table,
  Column,
  PrimaryKey,
  HasMany,
  Min
} from "sequelize-typescript";
import { Recruit } from "./recruit";
import { Introduction } from "./introduction";
import { sequelize } from "../loaders/database";

@Table
export class Enterprise extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(12),
    field: 'ent_no'
  })
  entNo!: string;

  @Column(DataType.STRING(30))
  name!: string;

  @Column(DataType.CHAR(13))
  phone!: string;

  @Column({
    type: DataType.STRING(15),
    field: 'establishment_date'
  })
  establishmentDate!: string;

  @Column(DataType.FLOAT)
  sales!: number;

  @Column(DataType.STRING)
  introduce!: string;

  @Column(DataType.STRING(50))
  sector!: string;

  @Column(DataType.STRING(40))
  address!: string;

  @Column({
    type: DataType.CHAR(5),
    field: 'zip_code'
  })
  zipCode!: string;

  @Min(1)
  @Column(DataType.INTEGER)
  workers!: number;

  @HasMany(() => Recruit, 'ent_no')
  recruits!: Recruit[];

  @HasMany(() => Introduction, 'ent_no')
  introductions!: Introduction[];
}

Enterprise.init({}, {
  sequelize,
  tableName: 'enterprise',
  modelName: 'enterprise'
});

Enterprise.hasMany(Recruit, {
  foreignKey: 'ent_no',
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Enterprise.hasMany(Introduction, {
  foreignKey: 'ent_no',
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});