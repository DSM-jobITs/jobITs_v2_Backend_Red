import {
  Recurit,
  Welfare,
  Meal,
  Qualification,
  Specialty,
  Certificate,
  Enterprise,
  Introduction
} from "../entities";

export class RecuritRepository {
  public static async getRecuritInfoById(recuritId: string) {
    return await Recurit.findOne({
      attributes: [
        'ent_no',
        'deadline',
        ['detail', 'workContent'],
        'salary',
        'period',
        'start_time',
        'end_time',
        'personnel',
        'reception'
      ],
      where: {
        recuritId
      },
      include: [
        {
          model: Welfare,
          required: true,
          attributes: ['four_major', 'self_develop', 'labtop', 'etc']
        },
        {
          model: Meal,
          required: true,
          attributes: ['breakfast', 'lunch', 'dinner', 'salary']
        },
        {
          model: Qualification,
          attributes: ['grade'],
          include: [
            {
              model: Specialty,
              attributes: ['specialty']
            },
            {
              model: Certificate,
              attributes: ['certificate']
            }
          ]
        },
        {
          model: Enterprise,
          required: true,
          attributes: ['name', 'phone', 'establishment_date', 'sales', 'introduce', 'address'],
          include: [{
            model: Introduction,
            required: true,
            attributes: [['original_name', 'name'], ['file_uuid', 'url']]
          }]
        }
      ]
    });
  }
}