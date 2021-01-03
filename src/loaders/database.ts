import { Sequelize } from "sequelize";
import config from "../config";
import logger from "./logger";

export const sequelize = new Sequelize(
  config.mysql.name,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
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

export default async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    logger.error(`mysql connection error: ${error.message}`);
    process.exit(1);
  }
};