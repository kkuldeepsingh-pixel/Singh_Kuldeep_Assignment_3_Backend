
import {
  createEventInDB,
  getAllEventsFromDB,
  getEventByIdFromDB,
  updateEventInDB,
  deleteEventFromDB
} from '../src/api/v1/repositories/eventRepository';

import { Event } from '../src/api/v1/models/eventModel';

// Mock Firebase config
jest.mock('../config/firebaseConfig', () => ({
  db: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        id: '123',
        set: jest.fn().mockResolvedValue(true),
        get: jest.fn().mockResolvedValue({
          exists: true,
          data: () => ({
            id: '123',
            name: 'Test Event',
            date: '2026-02-23',
            capacity: 100,
            registrationCount: 0,
            status: 'active',
            category: 'conference',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }),
        }),
        update: jest.fn().mockResolvedValue(true),
        delete: jest.fn().mockResolvedValue(true),
      })),
      get: jest.fn().mockResolvedValue({
        docs: [
          {
            data: () => ({
              id: '123',
              name: 'Test Event',
              date: '2026-02-23',
              capacity: 100,
              registrationCount: 0,
              status: 'active',
              category: 'conference',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }),
          },
        ],
      }),
    })),
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetModules();
});

describe('Event Repository', () => {
  const mockEvent = {
    id: '123',
    name: 'Test Event',
    date: '2026-02-23',
    capacity: 100,
    registrationCount: 0,
    status: 'active',
    category: 'conference',
  };

  it('should create an event', async () => {
    const result = await createEventInDB({
      ...mockEvent,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Event);

    // Assert all properties except timestamps
    expect(result.id).toBe(mockEvent.id);
    expect(result.name).toBe(mockEvent.name);
    expect(result.date).toBe(mockEvent.date);
    expect(result.capacity).toBe(mockEvent.capacity);
    expect(result.status).toBe(mockEvent.status);
    expect(result.category).toBe(mockEvent.category);
    expect(result.registrationCount).toBe(mockEvent.registrationCount);

    // Timestamps exist
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();
  });

  it('should fetch all events', async () => {
    const events = await getAllEventsFromDB();
    expect(events).toHaveLength(1);
    expect(events[0].id).toBe('123');
  });

  it('should fetch event by ID', async () => {
    const event = await getEventByIdFromDB('123');
    expect(event).not.toBeNull();
    expect(event?.id).toBe('123');
  });

  it('should update an event', async () => {
    const updatedData = { name: 'Updated Event' };
    const updatedEvent = await updateEventInDB('123', updatedData);
    expect(updatedEvent).toMatchObject(updatedData);
  });

  it('should delete an event', async () => {
    const deleted = await deleteEventFromDB('123');
    expect(deleted).toBe(true);
  });
});