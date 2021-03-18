import { Certificate } from "./certificate";
import { Depart } from "./depart";
import { Enterprise } from "./enterprise";
import { Introduction } from "./introduction";
import { Manager } from "./manager";
import { Meal } from "./meal";
import { Qualification } from "./qualification";
import { Recruit } from "./recruit";
import { Student } from "./student";
import { User } from "./user";
import { Welfare } from "./welfare";

Depart.hasMany(Student, {
  foreignKey: "depart_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Student.belongsTo(Depart, {
  foreignKey: "depart_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

User.hasOne(Student, {
  foreignKey: "user_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Student.belongsTo(User, {
  foreignKey: "user_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Enterprise.hasOne(Manager, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Manager.belongsTo(Enterprise, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Enterprise.hasMany(Recruit, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Recruit.belongsTo(Enterprise, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Enterprise.hasMany(Introduction, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Introduction.belongsTo(Enterprise, {
  foreignKey: "ent_no",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Recruit.hasOne(Welfare, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Welfare.belongsTo(Recruit, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Recruit.hasOne(Meal, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Meal.belongsTo(Recruit, {
  foreignKey: "recruit_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Recruit.hasOne(Qualification, {
  foreignKey: "recruit_id",
  sourceKey: "recruitId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Qualification.belongsTo(Recruit, {
  foreignKey: "recruit_id",
  targetKey: "recruitId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

Qualification.hasMany(Certificate, {
  foreignKey: "qualification_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
Certificate.belongsTo(Qualification, {
  foreignKey: "qualification_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

export {
  Certificate,
  Depart,
  Enterprise,
  Introduction,
  Manager,
  Meal,
  Qualification,
  Recruit,
  Student,
  User,
  Welfare
};