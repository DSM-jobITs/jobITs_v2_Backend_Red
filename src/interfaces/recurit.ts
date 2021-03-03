import { Optional } from "sequelize";

export interface RecuritAttribuets {
  id: string;
  reception: string | null;
  deadline: string | null;
  recuritPlan: boolean | null;
  startTime: string | null;
  endTime: string | null;
  salary: number | null;
  periiod: number | null;
  expired: boolean | null;
  personnel: number | null;
  detail: string | null;
  writing: boolean | null;
  page: number;
  entNo: string;
}