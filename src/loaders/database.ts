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