import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/database";
import { StudentAttributes } from "../../entities";

export class StudentRepository extends Model<StudentAttributes, "stdNo"> {

}

StudentRepository.init({
  stdNo: {
    type: DataTypes.CHAR(4),
    primaryKey: true,
    field: 'std_no'
  },
  departId: {
    type: DataTypes.INTEGER,
    field: 'depart_id'
  },
  userId: {
    type: DataTypes.STRING(15),
    unique: true
  }
}, {
  sequelize,
  tableName: 'student'
});