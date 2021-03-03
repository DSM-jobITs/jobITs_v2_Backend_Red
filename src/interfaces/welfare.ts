import { Optional } from "sequelize";

export interface WelfareAttributes {
  recuritId: string;
  fourMajor: boolean;
  selfDevelop: boolean;
  laptop: boolean;
  etc: string | null;
}