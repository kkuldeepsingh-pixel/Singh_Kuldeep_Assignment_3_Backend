import Joi from 'joi';

export const createEventSchema = Joi.object({
    name: Joi.string().min(3).required(),
    date: Joi.date().iso().required(),
    capacity: Joi.number().integer().required(),
    category: Joi.string()
    .valid('conference', 'workshop', 'meetup', 'seminar', 'general')
    .required(),
});

// Placeholder for Event validation schema
export {};