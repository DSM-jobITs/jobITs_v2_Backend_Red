import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { RecuritAttributes } from "../../interfaces";

export class RecuritRepository extends Model<RecuritAttributes, "id"> {
  public static async findOneById(id: string) {
    return await this.findByPk(id);
  }
}

RecuritRepository.init({
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true
  },
  reception: {
    type: DataTypes.CHAR(10),
    allowNull: true
  },
  deadline: {
    type: DataTypes.CHAR(10),
    allowNull: true
  },
  recuritPlan: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
    field: 'recurit_plan'
  },
  startTime: {
    type: DataTypes.CHAR(5),
    allowNull: true,
    field: 'start_time'
  },
  endTime: {
    type: DataTypes.CHAR(5),
    allowNull: true,
    field: 'end_time'
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  period: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  expired: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  personnel: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  detail: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  writing: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true
  },
  page: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: true
  },
  entNo: {
    type: DataTypes.CHAR(12),
    field: 'ent_no'
  }
}, {
  sequelize,
  tableName: 'recurit'
});