import { Request, Response } from 'express';
import {
  createEventInDB,
  getAllEventsFromDB,
  getEventByIdFromDB,
  updateEventInDB,
  deleteEventFromDB
} from '../repositories/eventRepository';


 // POST /events
 
export const createEventController = async (req: Request, res: Response) => {
  try {
    const event = await createEventInDB(req.body);
    res.status(201).json({ message: 'Event created', data: event });
  } catch (err: any) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};


 // GET /events
 
export const getAllEventsController = async (req: Request, res: Response) => {
  try {
    const events = await getAllEventsFromDB();
    res.status(200).json(events);
  } catch (err: any) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

//GET /events/:id

export const getEventByIdController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const event = await getEventByIdFromDB(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (err: any) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};


//PUT /events/:id

export const updateEventController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const updatedEvent = await updateEventInDB(req.params.id, req.body);

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event updated', data: updatedEvent });
  } catch (err: any) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// DELETE /events/:id
export const deleteEventController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const deletedEvent = await deleteEventFromDB(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted', data: deletedEvent });
  } catch (err: any) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};