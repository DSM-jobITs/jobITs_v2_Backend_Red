import { RecruitRepository } from "../repositories";
import { RecuritNotFound } from "../exception";
import {
  getRecruitResponse,
  Other
} from "../interfaces";
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
    let certificates: string[] | null = null;
    let specialties: string[] | null = null;

    if (recruitInfo.qualification.certificates.length) {
      certificates = [];
      for (let i = 0; i < recruitInfo.qualification.certificates.length; i++) {
        certificates.push(recruitInfo.qualification.certificates[i].certificate);
      }
    }
 
    if (recruitInfo.qualification.specialties.length) {
      specialties = [];
      for (let i = 0; i < recruitInfo.qualification.specialties.length; i++) {
        specialties.push(recruitInfo.qualification.specialties[i].specialty);
      }
    }

    this.recruitResponse.qualification = {
      certificate: certificates,
      grade: recruitInfo.qualification.grade,
      specialty: specialties
    }

    // recruitResponse.workingConditions props
    this.recruitResponse.workingConditions = {
      salary: recruitInfo.salary,
      period: recruitInfo.period,
      meal: {
        breakfast: !!recruitInfo.meal.breakfast,
        lunch: !!recruitInfo.meal.lunch,
        dinner: !!recruitInfo.meal.dinner,
        includeSalary: !!recruitInfo.meal.salary
      },
      welfare: {
        fourMajor: !!recruitInfo.welfare.fourMajor,
        selfDevelop: !!recruitInfo.welfare.selfDevelop,
        laptop: !!recruitInfo.welfare.laptop,
        etc: recruitInfo.welfare.etc
      }
    };

    // recruitResponse.entInfo props
    this.recruitResponse.entInfo = {
      numOfWorker: recruitInfo.enterprise.workers,
      entPhone: recruitInfo.enterprise.phone,
      entSales: recruitInfo.enterprise.sales,
      address: recruitInfo.enterprise.address,
      establishmentDate: recruitInfo.enterprise.establishmentDate,
      startTime: recruitInfo.startTime,
      endTime: recruitInfo.endTime
    };

    // recruitResponse.other props
    let files: Other.File.FileObject[] | null = null;

    if (recruitInfo.enterprise.introductions.length) {
      files = [];
      for (let i = 0; i < recruitInfo.enterprise.introductions.length; i++) {
        files.push({
          name: recruitInfo.enterprise.introductions[i].originalName,
          url: config.s3.bucketUrl + recruitInfo.enterprise.introductions[i].fileUuid
        });
      }
    }

    this.recruitResponse.other = {
      personnel: recruitInfo.personnel,
      recruitPlan: recruitInfo.recruitPlan,
      reception: recruitInfo.reception,
      file: files
    }

    return this.recruitResponse;
  }
}