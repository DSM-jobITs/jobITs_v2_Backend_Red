import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { UserAttributes, UserCreationAttributes } from "../../interfaces";

export class UserRepository extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: string;
  public password!: string;
  public name!: string;
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