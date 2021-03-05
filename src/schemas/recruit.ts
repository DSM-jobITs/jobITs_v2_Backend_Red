import Joi from "joi";

const recruitIdSchema = Joi.object().keys({
  recuritId: Joi.string().length(30).alphanum()
});

export { recruitIdSchema };