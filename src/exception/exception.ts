export class HttpError extends Error {
  constructor(status: number, message?: string) {
    super(message);
    this.name = "HttpError";
    this["status"] = status;
  }
}