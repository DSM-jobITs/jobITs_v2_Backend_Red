import { Optional } from "sequelize";

export interface UserAttributes {
  id: string;
  password: string;
  name: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}