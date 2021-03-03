import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { WelfareAttributes } from "../../interfaces";

export class WelfareRepository extends Model<WelfareAttributes, "recuritId"> {
  public static async findOneById(recuritId: string) {
    return await this.findByPk(recuritId);
  }
}

WelfareRepository.init({
  recuritId: {
    type: DataTypes.STRING(30),
    primaryKey: true,
    field: 'recurit_id'
  },
  fourMajor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'four_major'
  },
  selfDevelop: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'self_develop'
  },
  laptop: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  etc: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'welfare'
});