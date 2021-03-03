import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { EnterpriseAttributes } from "../../entities";

export class EnterpriseRepository extends Model<EnterpriseAttributes, "entNo"> {

}

EnterpriseRepository.init({
  entNo: {
    type: DataTypes.CHAR(12),
    primaryKey: true,
    field: 'ent_no'
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  phone: {
    type: DataTypes.CHAR(13),
    allowNull: true
  },
  establishmentDate: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: 'establishment_date'
  },
  sales: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  introduce: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sector: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  zipCode: {
    type: DataTypes.CHAR(5),
    allowNull: true,
    field: 'zip_code'
  }
}, {
  sequelize,
  tableName: 'enterprise'
});