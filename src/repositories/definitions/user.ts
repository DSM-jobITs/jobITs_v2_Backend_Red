import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { UserAttributes } from "../../interfaces";

export class UserRepository extends Model<UserAttributes, "id"> {
  public static async findOneById(id: string) {
    return await this.findByPk(id);
  }
}

UserRepository.init({
  id: {
    type: DataTypes.STRING(15),
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(5),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'user'
});