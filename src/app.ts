import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname + "../.env") });

const app: Application = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: err.message });
});

app.listen(3001, () => {
  console.log("Server listen at 3000 port!");
});