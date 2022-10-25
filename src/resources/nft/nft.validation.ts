import Joi from "joi";

const createNftValidate = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    imgUrl: Joi.string().required(),
});

export default { createNftValidate };