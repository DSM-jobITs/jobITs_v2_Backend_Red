import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { RecuritAttributes } from "../../entities";

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
    type: DataTypes.CHAR(10)
  },
  deadline: {
    type: DataTypes.CHAR(10)
  },
  recuritPlan: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'recurit_plan'
  },
  startTime: {
    type: DataTypes.CHAR(5),
    field: 'start_time'
  },
  endTime: {
    type: DataTypes.CHAR(5),
    field: 'end_time'
  },
  salary: {
    type: DataTypes.INTEGER
  },
  period: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  expired: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  personnel: {
    type: DataTypes.INTEGER
  },
  detail: {
    type: DataTypes.STRING()
  },
  writing: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  page: {
    type: DataTypes.INTEGER,
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