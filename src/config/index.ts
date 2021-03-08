import { config } from "dotenv";

config();

export default {
  port: Number(process.env.SERVER_PORT),
  mysql: {
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    name: process.env.DB_NAME || ""
  },
  secertKey: process.env.JWT_SECERT || "",
  s3: {
    name: process.env.S3_BUCKET_NAME || "",
    access: process.env.S3_ACCESS || "",
    secert: process.env.S3_SECERT || "",
    region: process.env.S3_REGION || "",
  }
};
