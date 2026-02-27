import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validateRequest = (
  schema: ObjectSchema,
  property: 'body' | 'params' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
      const messages = error.details.map((detail) => detail.message);

      return res.status(400).json({
        message: messages.join(', ')
      });
    }

    next();
  };
};