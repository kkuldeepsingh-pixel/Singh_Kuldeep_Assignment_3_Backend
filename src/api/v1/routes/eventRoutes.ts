/**
 * @openapi
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     CreateEvent:
 *       type: object
 *       required:
 *         - name
 *         - date
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     UpdateEvent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 */
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

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Create a new event
 *     description: Adds a new event to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEvent'
 *     responses:
 *       201:
 *         description: Event created successfully
 */
router.post(
  '/events',
  validateRequest(createEventSchema),
  createEventController
);

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Get all events
 *     description: Retrieves a list of all events
 *     responses:
 *       200:
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get('/events', getAllEventsController);

/**
 * @openapi
 * /events/{id}:
 *   get:
 *     summary: Get a single event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 */
router.get(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  getEventByIdController
);

/**
 * @openapi
 * /events/{id}:
 *   put:
 *     summary: Update an event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateEvent'
 *     responses:
 *       200:
 *         description: Event updated successfully
 */
router.put(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  validateRequest(updateEventSchema),
  updateEventController
);

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Delete an event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted successfully
 */
router.delete(
  '/events/:id',
  validateRequest(eventIdParamSchema, 'params'),
  deleteEventController
);

export default router;