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
        "ent_no",
        "deadline",
        ["detail", "workContent"],
        "salary",
        "period",
        "start_time",
        "end_time",
        "personnel",
        "reception"
      ],
      where: {
        recruitId
      },
      include: [
        {
          model: Enterprise,
          required: true,
          attributes: ["name", "phone", "establishment_date", "sales", "introduce", "address"],
          include: [
            {
              model: Introduction,
              required: false,
              attributes: [["original_name", "name"], ["file_uuid", "url"]]
            }
          ]
        },
        {
          model: Qualification,
          required: false,
          attributes: ["grade"],
          include: [
            {
              model: Certificate,
              required: false,
              attributes: ["certificate"]
            },
            {
              model: Specialty,
              required: false,
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
          attributes: ["four_major", "self_develop", "laptop", "etc"]
        }
      ]
    });
  }
}