import {
  CertificateRepository,
  DepartRepository,
  EnterpriseRepository,
  IntroductionRepository,
  ManagerRepository,
  MealRepository,
  QualificationRepository,
  RecuritRepository,
  SpecialtyRepositroy,
  StudentRepository,
  UserRepository,
  WelfareRepository
} from "./definitions";

UserRepository.hasOne(StudentRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
StudentRepository.belongsTo(UserRepository, {
  foreignKey: "userId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

DepartRepository.hasMany(StudentRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
StudentRepository.belongsTo(DepartRepository, {
  foreignKey: "departId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

QualificationRepository.hasMany(CertificateRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
CertificateRepository.belongsTo(QualificationRepository, {
  foreignKey: "qualificationId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

QualificationRepository.hasMany(SpecialtyRepositroy, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
SpecialtyRepositroy.belongsTo(QualificationRepository, {
  foreignKey: "qualificationId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

EnterpriseRepository.hasMany(RecuritRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
RecuritRepository.belongsTo(EnterpriseRepository, {
  foreignKey: "entNo",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

EnterpriseRepository.hasMany(IntroductionRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
IntroductionRepository.belongsTo(EnterpriseRepository, {
  foreignKey: "entNo",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

EnterpriseRepository.hasOne(ManagerRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
ManagerRepository.belongsTo(EnterpriseRepository, {
  foreignKey: "entNo",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

RecuritRepository.hasOne(MealRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
MealRepository.belongsTo(RecuritRepository, {
  foreignKey: "recuritId",
  onUpdate: "CASCADe",
  onDelete: "CASCADE"
});

RecuritRepository.hasOne(QualificationRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
QualificationRepository.belongsTo(RecuritRepository, {
  foreignKey: "id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

RecuritRepository.hasOne(WelfareRepository, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
WelfareRepository.belongsTo(RecuritRepository, {
  foreignKey: "recuritId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

export {
  CertificateRepository,
  DepartRepository,
  EnterpriseRepository,
  IntroductionRepository,
  ManagerRepository,
  MealRepository,
  QualificationRepository,
  RecuritRepository,
  SpecialtyRepositroy,
  StudentRepository,
  UserRepository,
  WelfareRepository
}