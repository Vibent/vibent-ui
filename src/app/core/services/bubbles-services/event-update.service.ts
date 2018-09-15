import { EventEmitter, Injectable, Output } from '@angular/core';
import { Event } from '../../../shared/models/event';

@Injectable()
export class EventUpdateService {
  
  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();
  
  constructor() {
  }
  
  updateEvent(event: Event) {
    this.eventUpdated.emit(event);
  }
  
}
