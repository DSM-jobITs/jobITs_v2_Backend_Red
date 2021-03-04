import { Model, DataType, Table, Column, HasMany } from "sequelize-typescript";
import { Recurit } from "./recurit";
import { Introduction } from "./introduction";

@Table
export class Enterprise extends Model {
  @Column({
    type: DataType.CHAR(12),
    primaryKey: true,
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
  zipCode

  @Column(DataType.INTEGER)
  personnel!: number;

  @HasMany(() => Recurit, {
    foreignKey: "ent_no",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  recurits!: Recurit[];

  @HasMany(() => Introduction, {
    foreignKey: "ent_no",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  introductions!: Introduction[];
}