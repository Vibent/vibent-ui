import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { PlanningBubble, PlanningDataModel, PlanningEntry } from '../../../../../shared/models/bubbles/PlanningBubble';
import * as moment from 'moment';

@Injectable()
export class PlanningDataService {

  user: User;
  planningEntry: PlanningEntry;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  constructPlanningDataModel(planningEntry: PlanningEntry): PlanningDataModel {
    return {
      user: this.httpService.getUser(planningEntry.userRef),
      start: moment(planningEntry.start).toDate()
    };
  }

  isCurrentUserEntry(planningEntry: PlanningEntry) {
    return planningEntry.userRef === this.user.ref;
  }

  getUpcomingEntries(bubble: PlanningBubble, maxEntries: number) {
    const entries = bubble.entries.sort((a, b) => Date.parse(a.start).valueOf() - Date.parse(b.start).valueOf());
    return entries.slice(0, maxEntries);
  }
}
