import { db } from '../../../../config/firebaseConfig';
import { Event } from '../models/eventModel';

export const createEventInDB = async (event: Event) => {
    const docRef = db.collection('events').doc(event.id);
    await docRef.set(event);
    return event;
};

export const getAllEventsFromDB = async (): Promise<Event[]> => {
    const snapshot = await db.collection('events').get();
    return snapshot.docs.map(doc => doc.data() as Event);
};

export const getEventByIdFromDB = async (id: string): Promise<Event | null> => {
    const doc = await db.collection('events').doc(id).get();
    return doc.exists ? (doc.data() as Event) : null;
};

export const updateEventInDB = async (id: string, data: Partial<Event>): Promise<Event | null> => {
    const docRef = db.collection('events').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return null;
    await docRef.update(data);
    return { ...(doc.data() as Event), ...data };
};

export const deleteEventFromDB = async (id: string): Promise<boolean> => {
    const docRef = db.collection('events').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return false;
    await docRef.delete();
    return true;
};