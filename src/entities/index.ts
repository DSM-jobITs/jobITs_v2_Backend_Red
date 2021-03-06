import { Certificate } from "./certificate";
import { Depart } from "./depart";
import { Enterprise } from "./enterprise";
import { Introduction } from "./introduction";
import { Manager } from "./manager";
import { Meal } from "./meal";
import { Qualification } from "./qualification";
import { Recruit } from "./recruit";
import { Specialty } from "./specialty";
import { Student } from "./student";
import { User } from "./user";
import { Welfare } from "./welfare";

Depart.hasMany(Student, {
  foreignKey: "depart_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Student.belongsTo(Depart);

User.hasOne(Student, {
  foreignKey: "user_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Student.belongsTo(User);

Enterprise.hasOne(Manager, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Manager.belongsTo(Enterprise);

Enterprise.hasMany(Recruit, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Recruit.belongsTo(Enterprise);

Enterprise.hasMany(Introduction, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Introduction.belongsTo(Enterprise);

Recruit.hasOne(Welfare, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Welfare.belongsTo(Recruit);

Recruit.hasOne(Meal, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Meal.belongsTo(Recruit);

Recruit.hasOne(Qualification, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Qualification.belongsTo(Recruit);

Qualification.hasMany(Certificate, {
  foreignKey: "qualification_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Certificate.belongsTo(Qualification);

Qualification.hasMany(Specialty, {
  foreignKey: "qualification_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Specialty.belongsTo(Qualification);

export {
  Certificate,
  Depart,
  Enterprise,
  Introduction,
  Manager,
  Meal,
  Qualification,
  Recruit,
  Specialty,
  Student,
  User,
  Welfare
};