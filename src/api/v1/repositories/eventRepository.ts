import { db } from '../../../../config/firebaseConfig';
import { Event } from '../models/eventModel';

// CREATE EVENT
// Firestore generates the document ID automatically
export const createEventInDB = async (
  event: Omit<Event, 'id' | 'registrationCount' | 'createdAt' | 'updatedAt'>
): Promise<Event> => {

  const docRef = db.collection('events').doc();

  const newEvent: Event = {
    ...event,
    id: docRef.id,
    registrationCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await docRef.set(newEvent);

  return newEvent;
};


// GET ALL EVENTS
export const getAllEventsFromDB = async (): Promise<Event[]> => {
  const snapshot = await db.collection('events').get();
  return snapshot.docs.map((doc) => doc.data() as Event);
};


// GET EVENT BY ID
export const getEventByIdFromDB = async (
  id: string
): Promise<Event | null> => {

  if (!id) return null;

  const doc = await db.collection('events').doc(id).get();

  return doc.exists ? (doc.data() as Event) : null;
};


// UPDATE EVENT
export const updateEventInDB = async (
  id: string,
  data: Partial<Event>
): Promise<Event | null> => {

  const docRef = db.collection('events').doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return null;

  const updatedData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  await docRef.update(updatedData);

  return {
    ...(doc.data() as Event),
    ...updatedData,
  };
};


// DELETE EVENT
export const deleteEventFromDB = async (
  id: string
): Promise<boolean> => {

  const docRef = db.collection('events').doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return false;

  await docRef.delete();

  return true;
};