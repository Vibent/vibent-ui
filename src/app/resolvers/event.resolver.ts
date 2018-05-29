import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Event } from '../models/event';
import { HttpService } from '../http/http.service';

@Injectable()
export class EventResolver implements Resolve<Event> {
  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot): Event | Observable<Event> | Promise<Event> {
    return this.httpService.getEvent(route.paramMap.get('ref'));
  }
}
