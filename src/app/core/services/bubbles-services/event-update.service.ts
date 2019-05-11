import { Injectable } from '@angular/core';
import { EventUpdate } from '../../../shared/models/event';
import { HttpService } from '../../http/http.service';
import { BlacknoteService } from '../blacknote/blacknote.service';
import { LoaderService } from '../loader/service/loader.service';
import { Subject } from 'rxjs';
import { IBubble } from '../../../shared/models/bubbles/IBubble';

@Injectable()
export class EventUpdateService {

  eventUpdated$ = new Subject<EventUpdate>();

  constructor(private httpService: HttpService,
              private loaderService: LoaderService,
              private blacknoteService: BlacknoteService) {
  }

  updateEvent(eventRef: string, bubble?: IBubble) {
    this.blacknoteService.sendEventUpdate(eventRef);
    this.httpService.getEvent(eventRef).subscribe((event) => {
      this.eventUpdated$.next({event: event, bubble: bubble});
    });
  }

  updateEventExclusive(eventRef: string) {
    this.blacknoteService.sendEventUpdate(eventRef);
  }

}
