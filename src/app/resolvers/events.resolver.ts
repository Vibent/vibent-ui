import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Event} from '../models/event';
import {HttpService} from '../http/http.service';
import {AdditionalEventInfoService} from '../services/additional-event-info.service.';

@Injectable()
export class EventsResolver implements Resolve<Event[]> {
  constructor(private httpService: HttpService,
              private additonalEventInfoService: AdditionalEventInfoService) {
  }

  resolve(route: ActivatedRouteSnapshot): Event[] | Observable<Event[]> | Promise<Event[]> {
    return this.httpService.getEvents();
  }
}
