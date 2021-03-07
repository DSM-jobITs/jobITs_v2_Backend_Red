import { RecruitRepository } from "../repositories";
import { RecuritNotFound } from "../exception";
import { getRecruitResponse } from "../interfaces";
import config from "../config";

export class RecruitService {
  constructor(
    private recruitRepository: RecruitRepository,
    private recruitResponse: getRecruitResponse
  ) {}

  public async getRecruitInfoById(recruitId: string): Promise<object> {
    const recruitInfo = await this.recruitRepository.getRecruitInfoById(recruitId);
    if (!recruitInfo) {
      throw RecuritNotFound;
    }

    // recruitResponse basic props
    this.recruitResponse.entName = recruitInfo.enterprise.name;
    this.recruitResponse.entNo = recruitInfo.entNo;
    this.recruitResponse.deadline = recruitInfo.deadline;
    this.recruitResponse.introduction = recruitInfo.enterprise.introduce;
    this.recruitResponse.workContent = recruitInfo.detail;

    // recruitResponse.qualification props
    if (recruitInfo.qualification.certificates.length) {
      this.recruitResponse.qualification.certificate = [];
      for (let i = 0; i < recruitInfo.qualification.certificates.length; i++) {
        this.recruitResponse.qualification.certificate.push(recruitInfo.qualification.certificates[i]["certificate"]);
      }
    } else {
      this.recruitResponse.qualification.certificate = null;
    }

    this.recruitResponse.qualification.grade = recruitInfo.qualification.grade;
    
    if (recruitInfo.qualification.specialties.length) {
      this.recruitResponse.qualification.specialty = [];
      for (let i = 0; i < recruitInfo.qualification.specialties.length; i++) {
        this.recruitResponse.qualification.specialty.push(recruitInfo.qualification.specialties[i]["specialty"]);
      }
    } else {
      this.recruitResponse.qualification.specialty = null;
    }

    // recruitResponse.workingConditions props
    this.recruitResponse.workingConditions.salary = recruitInfo.salary;
    this.recruitResponse.workingConditions.period = recruitInfo.period;
    
    // recruitResponse.workingConditoins.meal props
    this.recruitResponse.workingConditions.meal = {
      breakfast: !!recruitInfo.meal.breakfast,
      lunch: !!recruitInfo.meal.lunch,
      dinner: !!recruitInfo.meal.dinner,
      includeSalary: !!recruitInfo.meal.salary
    };

    // recruitResponse.workingConditions.welfare props
    this.recruitResponse.workingConditions.welfare = {
      fourMajor: !!recruitInfo.welfare.fourMajor,
      selfDevelop: !!recruitInfo.welfare.selfDevelop,
      laptop: !!recruitInfo.welfare.laptop,
      etc: recruitInfo.welfare.etc
    };

    // recruitResponse.entInfo props
    this.recruitResponse.entInfo.numOfWorker = recruitInfo.enterprise.workers;
    this.recruitResponse.entInfo.entPhone = recruitInfo.enterprise.phone;
    this.recruitResponse.entInfo.entSales = recruitInfo.enterprise.sales;
    this.recruitResponse.entInfo.address = recruitInfo.enterprise.address;
    this.recruitResponse.entInfo.establishmentDate = recruitInfo.enterprise.establishmentDate;
    this.recruitResponse.entInfo.startTime = recruitInfo.startTime;
    this.recruitResponse.entInfo.endTime = recruitInfo.endTime;

    // recruitResponse.other props
    this.recruitResponse.other.personnel = recruitInfo.personnel;
    this.recruitResponse.other.recruitPlan = recruitInfo.recruitPlan;
    this.recruitResponse.other.reception = recruitInfo.reception;

    // recruitResponse.other.file props
    if (recruitInfo.enterprise.introductions.length) {
      this.recruitResponse.other.file = [];
      for (let i = 0; i < recruitInfo.enterprise.introductions.length; i++) {
        this.recruitResponse.other.file.push({
          name: recruitInfo.enterprise.introductions[i].originalName,
          url: config.s3.bucketUrl + recruitInfo.enterprise.introductions[i].fileUuid
        });
      }
    } else {
      this.recruitResponse.other.file = null;
    }

    return this.recruitResponse;
  }
}