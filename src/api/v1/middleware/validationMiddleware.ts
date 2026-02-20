import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      // Collects the all messages from Joi validation
      const messages = error.details.map((detail) => detail.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    next();
  };
};