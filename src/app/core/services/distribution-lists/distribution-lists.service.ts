import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { take } from 'rxjs/operators';
import { Event } from '../../../shared/models/event';
import { BehaviorSubject, Observable } from 'rxjs';
import { DistributionList } from '../../../shared/models/distribution-list';

export interface IEventSimpleInformation {
  title: string;
  ref: string;
  peopleIn: number;
}

@Injectable()
export class DistributionListsService {

  updated$ = new BehaviorSubject(false);

  constructor(private httpService: HttpService) {
  }

  getUserEvents(): Promise<IEventSimpleInformation[]> {
    const dlei: IEventSimpleInformation[] = [];
    return new Promise(resolve => {
      this.httpService.getEvents().pipe(take(1)).subscribe(
        (events: Event[]) => {
          for (const event of events) {
            dlei.push({
              title: event.title,
              ref: event.ref,
              peopleIn: event.participationRefs.length
            });
          }
          resolve(dlei);
        });
    });
  }

  updateUserLists() {
    this.updated$.next(true);
  }

  getUserDistributionLists(): Observable<DistributionList[]> {
    return this.httpService.getConnectedDistributionLists();
  }

}
