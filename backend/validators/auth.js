import Joi from 'joi'

export const registerUserValidator = Joi.object({
    fullName:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required(),
    confirmPassword : Joi.ref('password'),
    role: Joi.string().required().valid('volunteer', 'admin'),
    phoneNumber: Joi.string().optional(),
   imageUpload: Joi.string().optional()

}).with('password', 'confirmPassword');

export const loginUserValidator = Joi.object({
    email : Joi.string().required(),
    password : Joi.string().required(),
});

export const updateUserValidator = Joi.object({  
    fullName : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string().required(),
    role: Joi.string().required().valid('volunteer', 'admin'),
    confirmPassword : Joi.ref('password'),
    phoneNumber: Joi.string().optional(),
    uploadProfile:Joi.string().optional()
    });
