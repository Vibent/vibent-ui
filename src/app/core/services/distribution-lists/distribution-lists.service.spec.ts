import { DistributionListsService, IEventSimpleInformation } from './distribution-lists.service';
import { HttpService } from '../../http/http.service';
import { Observable, of } from 'rxjs';
import { Event } from '../../../shared/models/event';

describe('Distribution List Service', () => {

  let service: DistributionListsService;
  let httpService: HttpService;
  const events: Event[] = [
    {title: 'dummyEvent', ref: 'dummy', participationRefs: [{userRef: 'dummy'}]},
    {title: 'dummyEvent2', ref: 'dummy2', participationRefs: [{userRef: 'dummy'}, {userRef: 'dummy'}]}
  ];

  beforeEach(() => {
    httpService = <HttpService>{
      getEvents(): Observable<Event[]> {
        return of(events);
      }
    };
    service = new DistributionListsService(httpService);
  });

  it('check states checkers', () => {
    service.getUserEvents().then((data: IEventSimpleInformation[]) => {
      const distributionListEventsInfos = data;
      expect(distributionListEventsInfos.length).toBe(2);
      expect(distributionListEventsInfos[0].peopleIn).toBe(1);
      expect(distributionListEventsInfos[1].peopleIn).toBe(2);
    });
  });

});