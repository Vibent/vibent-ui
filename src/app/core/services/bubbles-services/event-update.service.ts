import { Injectable } from '@angular/core';
import { Event } from '../../../shared/models/event';
import { HttpService } from '../../http/http.service';
import { BlacknoteService } from '../blacknote/blacknote.service';
import { LoaderService } from '../loader/service/loader.service';
import { Subject } from 'rxjs';

@Injectable()
export class EventUpdateService {

  eventUpdated$ = new Subject<Event>();

  constructor(private httpService: HttpService,
              private loaderService: LoaderService,
              private blacknoteService: BlacknoteService) {
  }

  updateEvent(eventRef: string) {
    this.blacknoteService.sendEventUpdate(eventRef);
    this.httpService.getEvent(eventRef).subscribe((event) => {
      this.eventUpdated$.next(event);
    });
  }

  updateEventExclusive(eventRef: string) {
    this.blacknoteService.sendEventUpdate(eventRef);
  }

}
