import {
  Recruit,
  Welfare,
  Meal,
  Qualification,
  Specialty,
  Certificate,
  Enterprise,
  Introduction
} from "../entities";

export class RecruitRepository {
  public async getRecruitInfoById(recruitId: string) {
    return await Recruit.findOne({
      attributes: [
        ["ent_no", "entNo"],
        "deadline",
        "detail",
        "salary",
        "period",
        ["start_time", "startTime"],
        ["end_time", "endTime"],
        "personnel",
        "reception",
        ["recruit_plan", "recruitPlan"]
      ],
      where: {
        recruitId
      },
      include: [
        {
          model: Enterprise,
          required: true,
          attributes: [
            "name",
            "phone",
            ["establishment_date", "establishmentDate"],
            "sales",
            "introduce",
            "address",
            "workers"
          ],
          include: [
            {
              model: Introduction,
              required: false,
              attributes: [["original_name", "originalName"], ["file_uuid", "fileUuid"]]
            }
          ]
        },
        {
          model: Qualification,
          required: true,
          attributes: ["grade"],
          include: [
            {
              model: Certificate,
              required: true,
              attributes: ["certificate"]
            },
            {
              model: Specialty,
              required: true,
              attributes: ["specialty"]
            }
          ]
        },
        {
          model: Meal,
          required: true,
          attributes: ["breakfast", "lunch", "dinner", "salary"]
        },
        {
          model: Welfare,
          required: true,
          attributes: [
            ["four_major", "fourMajor"],
            ["self_develop", "selfDevelop"],
            "laptop",
            "etc"
          ]
        }
      ]
    });
  }
}