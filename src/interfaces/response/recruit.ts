export interface getRecruitResponse {
  entName: string;
  entNo: string;
  deadline: string;
  introduction: string;
  workContent: string;
  qualification: Qualification.QualificationObject;
  workingConditions: WorkingConditions.WorkingConditionsObject;
  entInfo: EntInfo.EntInfoObject;
  other: Other.OtherObject;
}

namespace Qualification {
  type QualificationKey = "certificate" | "grade" | "specialty";
  export type QualificationObject = {
    [key in QualificationKey]: Array<string> | number | null;
  }
}

namespace WorkingConditions {
  type WorkingConditionsKey = "salary" | "period" | "meal" | "welfare";
  namespace Meal {
    type MealKey = "breakfast" | "lunch" | "dinner" | "includeSalary";  
    export type MealObject = {
      [key in MealKey]: boolean;
    }
  }
  namespace Welfare {
    type WelfareKey = "fourMajor" | "selfDevelop" | "labtop" | "etc";
    export type WelfareObject = {
      [key in WelfareKey]: boolean | string;
    }
  }

  export type WorkingConditionsObject = {
    [key in WorkingConditionsKey]: number | Meal.MealObject | Welfare.WelfareObject;
  }
}

namespace EntInfo {
  type EntInfoKey = "numOfWorker" | "entPhone" | "entSales" | "address" | "establishmentDate" | "startTime" | "endTime";
  export type EntInfoObject = {
    [key in EntInfoKey]: number | string;
  }
}

namespace Other {
  type OtherKey = "personnel" | "recruitPlan" | "reception" | "file";
  namespace File {
    type FileKey = "name" | "url";
    export type FileObject = {
      [key in FileKey]: string;
    }
  }

  export type OtherObject = {
    [name in OtherKey]: number | boolean | string | File.FileObject;
  }
}