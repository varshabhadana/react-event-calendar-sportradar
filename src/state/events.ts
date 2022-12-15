import create from 'zustand';
import eventData from '../mockData.json';

export const useEventStore = create((set) => ({
  events: eventData.data,
  addNewEvent: (newEvent: any) =>
    set((state: any) => ({ events: [...state.events, newEvent] })),
}));
