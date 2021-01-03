import { Application } from "express";
import expressLoader from "./express";
import databaseConnect from "./database";

export default async (app: Application) => {
  await databaseConnect();
  expressLoader(app);
};