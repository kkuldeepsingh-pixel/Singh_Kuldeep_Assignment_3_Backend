import express from 'express';
import { createEventSchema } from '../validation/eventValidation';
import { validateRequest } from '../middleware/validationMiddleware';
import { createEventController } from '../controllers/eventController';

const router = express.Router();

// POST /api/v1/events
router.post('/events', validateRequest(createEventSchema), createEventController);

export default router;