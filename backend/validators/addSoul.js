import Joi from "joi";

export const addSoulValidator = Joi.object({
  fullName: Joi.string().required(),
  gender: Joi.string().valid("Male", "Female").required(),
  age: Joi.number().min(1).required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  location: Joi.string().required(),
  outreachStatus: Joi.string()
    .valid("Prayed With", "Gave Life to Christ", "Was born again")
    .required(),
  notes: Joi.string().optional(),
  assignedVolunteer: Joi.string().optional(), // volunteer ID
});
