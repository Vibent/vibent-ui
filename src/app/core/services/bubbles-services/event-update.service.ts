import { EventEmitter, Injectable, Output } from '@angular/core';
import { Event } from '../../../shared/models/event';
import { HttpService } from '../../http/http.service';

@Injectable()
export class EventUpdateService {
  
  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();
  
  constructor(private httpService: HttpService) {
  }
  
  updateEvent(eventRef: string) {
    this.httpService.getEvent(eventRef).subscribe((event) => {
      this.eventUpdated.emit(event);
    });
    
  }
  
}
