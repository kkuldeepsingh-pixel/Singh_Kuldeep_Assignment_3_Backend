import express from 'express';
import { createEventSchema } from '../validation/eventValidation';
import { validateRequest } from '../middleware/validationMiddleware';

const router = express.Router();

// Placeholder controller for now
const createEventController = (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Controller not implemented yet' });
};

// Use validation middleware before the placeholder controller
router.post('/events', validateRequest(createEventSchema), createEventController);

export default router;