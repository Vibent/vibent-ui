import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { PlanningBubble, PlanningDataModel, PlanningEntry } from '../../../../../shared/models/bubbles/PlanningBubble';
import { PlanningDataService } from './planning-data.service';
import moment = require('moment');

let planningDataService: PlanningDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

let planningDataModel = new PlanningDataModel();
let planningEntry: PlanningEntry;
let otherEntry: PlanningEntry;
let planningBubble: PlanningBubble;
const user: User = {ref: 'ref'};

describe('Planning data Service', () => {

  beforeEach(() => {

    userManagementService = <UserManagementService>{
      getMe(userRef: string): User {
        return user;
      }
    };
    httpService = <HttpService>{
      getUser(userRef: string): Observable<User> {
        return of(user);
      }
    };
    planningEntry = {
      content: 'content',
      end: new Date().toDateString(),
      id: 0,
      bubbleId: 0,
      start: '2019-02-26T15:05:00',
      userRef: 'ref',
      hasTime: true
    };
    otherEntry = {
      content: 'content other',
      end: new Date().toDateString(),
      id: 1,
      bubbleId: 0,
      start: '2019-02-26T14:05:00',
      userRef: 'ref',
      hasTime: true
    };

    planningBubble = new PlanningBubble();
    planningBubble.entries = [planningEntry, otherEntry];

    planningDataService = new PlanningDataService(userManagementService, httpService);
    planningDataModel = planningDataService.constructPlanningDataModel(planningEntry);
  });

  it('Check planning entry date is formated with moment', () => {
    expect(planningDataModel.start).toEqual(moment('2019-02-26 15:05:00').toDate());
  });

  it('Check planning entry date is formated with moment', () => {
    planningDataModel.user.subscribe((received: User) => {
      expect(received).toEqual(user);
    });
  });

  // getUpcomingEntries
  it('Check getUpcomingEntries sorts entries', () => {
    const entries = planningDataService.getUpcomingEntries(planningBubble, 3);
    expect(entries[0].id).toEqual(1);
    expect(entries[1].id).toEqual(0);
  });

  it('Check getUpcomingEntries maxEntries should limit return', () => {
    const entries = planningDataService.getUpcomingEntries(planningBubble, 1);
    expect(entries.length).toEqual(1);
  });

  it('Check getUpcomingEntries no entries', () => {
    planningBubble.entries = [];
    const entries = planningDataService.getUpcomingEntries(planningBubble, 3);
    expect(entries.length).toEqual(0);
  });

});
