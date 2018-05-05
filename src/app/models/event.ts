import {Group} from './group';

export class Event {

  constructor(
    public _eventTitle: string,
    public _eventDescription: string,
    public _eventDate: Date,
    public _eventGroup: Group) {}

}
