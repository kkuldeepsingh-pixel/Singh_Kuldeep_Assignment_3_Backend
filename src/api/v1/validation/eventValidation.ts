import Joi from 'joi';

export const createEventSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.base': 'Validation error: "name" must be a string',
            'string.empty': 'Validation error: "name" is required',
            'string.min': 'Validation error: "name" length must be at least 3 characters long',
        }),
    date: Joi.date()
        .iso()
        .greater('now')
        .required()
        .messages({
            'date.base': 'Validation error: "date" must be a valid date',
            'any.required': 'Validation error: "date" is required',
            'date.greater': 'Validation error: "date" must be greater than "now"',
        }),
    capacity: Joi.number()
        .integer()
        .min(5)
        .required()
        .messages({
            'number.base': 'Validation error: "capacity" must be a number',
            'number.integer': 'Validation error: "capacity" must be an integer',
            'number.min': 'Validation error: "capacity" must be greater than or equal to 5',
            'any.required': 'Validation error: "capacity" is required',
        }),
    registrationCount: Joi.number()
        .integer()
        .max(Joi.ref('capacity'))
        .default(0)
        .messages({
            'number.max': 'Validation error: "registrationCount" must be less than or equal to ref:capacity',
        }),
    status: Joi.string()
        .valid('active', 'cancelled', 'completed')
        .default('active')
        .messages({
            'any.only': 'Validation error: "status" must be one of (active, cancelled, completed)',
        }),
    category: Joi.string()
        .valid('conference', 'workshop', 'meetup', 'seminar', 'general')
        .required()
        .messages({
            'any.only': 'Validation error: "category" must be one of (conference, workshop, meetup, seminar, general)',
            'any.required': 'Validation error: "category" is required',
        }),
});

// Placeholder for Event validation schema
export {};