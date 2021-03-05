import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request");
export const ApiNotFound = new HttpError(404, "Api Not Found");
export const RecuritNotFound = new HttpError(404, "Recurit Not Found");