import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { SpecialtyAttributes } from "../../interfaces";

export class SpecialtyRepositroy extends Model<SpecialtyAttributes, "id"> {
  public static async findOneById(id) {
    return await this.findByPk(id);
  }
}

SpecialtyRepositroy.init({
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  specialty: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  qualificationId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'qualification_id'
  }
}, {
  sequelize,
  tableName: 'specialty'
});