import { EventEmitter, Injectable, Output } from '@angular/core';
import { Event } from '../../../shared/models/event';
import { HttpService } from '../../http/http.service';
import { BlacknoteService } from '../blacknote/blacknote.service';

@Injectable()
export class EventUpdateService {

  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();

  constructor(private httpService: HttpService, private blacknoteService: BlacknoteService) {
  }

  updateEvent(eventRef: string) {
    this.blacknoteService.sendEventUpdate(eventRef);
    this.httpService.getEvent(eventRef).subscribe((event) => {
      this.eventUpdated.emit(event);
    });
  }

}
