import Joi from "joi";

const recruitIdSchema = Joi.object().keys({
  recruitId: Joi.string().alphanum().max(30)
});

export { recruitIdSchema };