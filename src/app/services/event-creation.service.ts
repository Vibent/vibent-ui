import {Injectable} from '@angular/core';
import {Group} from '../models/group';
import {Event} from '../models/event';

@Injectable()
export class EventCreationService {
  constructor() {}

  public createEvent(title: string, description: string, date: Date, group: Group): void {
    let event: Event;
    event = new Event(title, description, date, group);
    console.log(event);
  }

}
