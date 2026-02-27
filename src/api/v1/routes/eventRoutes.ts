import express from 'express';
import {
  createEventSchema,
  eventIdParamSchema,
  updateEventSchema
} from '../validation/eventValidation';
import { validateRequest } from '../middleware/validationMiddleware';

import {
  createEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
  deleteEventController
} from '../controllers/eventController';

const router = express.Router();

// CREATE 
router.post(
  '/events',
  validateRequest(createEventSchema),
  createEventController
);

// READ ALL
router.get(
  '/events',
  getAllEventsController
);

// READ ONE
router.get(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  getEventByIdController
);

// UPDATE
router.put(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  validateRequest(updateEventSchema),
  updateEventController
);

// DELETE
router.delete(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  deleteEventController
);

export default router;