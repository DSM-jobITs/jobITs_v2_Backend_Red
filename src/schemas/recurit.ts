import Joi from "joi";

const recuritIdSchema = Joi.object().keys({
  recuritId: Joi.string()
    .length(30)
    .pattern(new RegExp('^[0-9]{1,30}$'))
});

export { recuritIdSchema };