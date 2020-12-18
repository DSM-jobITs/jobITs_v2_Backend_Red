import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname + '../../../.env')});

export const config = {
  database: {
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_HOST: process.env.DB_HOST || "",
    DB_NAME: process.env.DB_NAME || ""
  }
};