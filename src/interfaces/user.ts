import { Optional } from "sequelize";

export interface UserAttributes {
  id: string;
  password: string;
  name: string;
}