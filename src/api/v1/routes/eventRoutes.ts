import express from 'express';
import { createEventSchema } from '../validation/eventValidation';
import { validateRequest } from '../middleware/validationMiddleware';

import {
  createEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
  deleteEventController
} from '../controllers/eventController';

const router = express.Router();

// CREATE (must match video validation)
router.post('/events', validateRequest(createEventSchema), createEventController);

// READ ALL
router.get('/events', getAllEventsController);

// READ ONE
router.get('/events/:id', getEventByIdController);

// UPDATE
router.put('/events/:id', updateEventController);

// DELETE
router.delete('/events/:id', deleteEventController);

export default router;