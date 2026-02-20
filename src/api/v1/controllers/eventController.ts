import { Request, Response } from 'express';

export const createEventController = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Controller placeholder: event created', data: req.body });
};