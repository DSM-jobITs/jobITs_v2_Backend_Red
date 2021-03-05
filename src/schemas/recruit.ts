import Joi from "joi";

const recruitIdSchema = Joi.object().keys({
  recruitId: Joi.string().length(30).alphanum()
});

export { recruitIdSchema };