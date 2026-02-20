import Joi from 'joi';

export const createEventSchema = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().iso().required(),
    status: Joi.string().required(),
    capacity: Joi.number().integer().required(),
    category: Joi.string().required(),
});

// Placeholder for Event validation schema
export {};