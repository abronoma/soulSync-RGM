import Joi from 'joi'

export const registerUserValidator = Joi.object({
    username : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string().required(),
    role: Joi.string().required().valid('user', 'vendor', 'admin'),
    confirmPassword : Joi.ref('password'),
    phone: Joi.string().optional(),
    contactName:Joi.string().optional(),
    uploadProfile:Joi.string().optional()

}).with('password', 'confirmPassword');

export const loginUserValidator = Joi.object({
    username : Joi.string().optional(),
    email : Joi.string().required(),
    password : Joi.string().required(),
});

export const updateUserValidator = Joi.object({
    role:Joi.string().valid('volunteer','admin').required(),
        
    });
