import EventModel from '@src/model/eventModel';
import { EventObject } from '@src/types/events';
import { v4 as uuidv4 } from 'uuid';

const initialEvents: EventObject[] = [
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-01T00:00:00',
    end: '2024-01-01T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-02T00:00:00',
    end: '2024-01-02T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-03T00:00:00',
    end: '2024-01-03T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-04T00:00:00',
    end: '2024-01-04T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-05T00:00:00',
    end: '2024-01-05T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-06T00:00:00',
    end: '2024-01-06T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Рождество Христово',
    category: 'allday',
    start: '2024-01-07T00:00:00',
    end: '2024-01-07T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-01-08T00:00:00',
    end: '2024-01-08T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'День защитника Отечества',
    category: 'allday',
    start: '2024-02-23T00:00:00',
    end: '2024-02-23T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Международный женский день',
    category: 'allday',
    start: '2024-03-08T00:00:00',
    end: '2024-03-08T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Праздник Весны и Труда',
    category: 'allday',
    start: '2024-05-01T00:00:00',
    end: '2024-05-01T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'День Победы',
    category: 'allday',
    start: '2024-05-09T00:00:00',
    end: '2024-05-09T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'День Победы',
    category: 'allday',
    start: '2024-05-10T00:00:00',
    end: '2024-05-10T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'День России',
    category: 'allday',
    start: '2024-06-12T00:00:00',
    end: '2024-06-12T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'День народного единства',
    category: 'allday',
    start: '2024-11-04T00:00:00',
    end: '2024-11-04T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-12-30T00:00:00',
    end: '2024-12-30T23:59:00',
  },
  {
    id: uuidv4(),
    calendarId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Новогодние каникулы',
    category: 'allday',
    start: '2024-12-31T00:00:00',
    end: '2024-12-31T23:59:00',
  },
];

console.log(initialEvents)

const eventModels = initialEvents.map(event => new EventModel(event));

export default eventModels