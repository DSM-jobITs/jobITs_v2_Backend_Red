import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { WelfareAttributes, WelfareCreationAttributes } from "../../interfaces";

export class WelfareRepository extends Model<WelfareAttributes, WelfareCreationAttributes>
  implements WelfareAttributes {
  public recuritId!: string;
  public fourMajor!: boolean;
  public selfDevelop!: boolean;
  public laptop!: boolean;
  public etc!: string | null;

  public static async createWelfare(
    recuritId: string,
    fourMajor: boolean,
    selfDevelop: boolean,
    laptop: boolean,
    etc: string | null
  ) {
    await this.create({
      recuritId,
      fourMajor,
      selfDevelop,
      laptop,
      etc
    });
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