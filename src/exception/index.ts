import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request");
export const TokenRequired = new HttpError(401, "Token Required");
export const ForbiddenToken = new HttpError(403, "Forbidden Token");
export const ApiNotFound = new HttpError(404, "Api Not Found");
export const RecruitNotFound = new HttpError(404, "Recruit Not Found");