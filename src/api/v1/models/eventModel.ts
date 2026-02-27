export interface Event {
    id: string;
    name: string;
    date: string; 
    capacity: number;
    registrationCount: number;
    status: 'active' | 'cancelled' | 'completed';
    category: 'conference' | 'workshop' | 'meetup' | 'seminar' | 'general';
    createdAt: string;
    updatedAt: string;
}

export type CreateEvent = Omit<
  Event,
  'id' | 'registrationCount' | 'createdAt' | 'updatedAt'
>;