import { Meal } from "../entities";

export class MealRepository {
  public static async getMealInfoById(recuritId: string) {
    return await Meal.findOne({
      attributes: ['breakfast', 'lunch', 'dinner', 'salary'],
      where: {
        recuritId
      }
    });
  }
}