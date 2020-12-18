import { Sequelize } from "sequelize";
import { config } from "./database";

export const sequelize = new Sequelize(
  config.database.DB_NAME,
  config.database.DB_USER,
  config.database.DB_PASSWORD,
  {
    host: config.database.DB_HOST,
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      timestamps: false
    },
    timezone: "+09:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);