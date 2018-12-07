import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/event';
import { HttpService } from '../http/http.service';
import { AdditionnalEventInfos } from '../../shared/models/additionnal-event-infos';
import { EventParticipantAnswer } from '../../shared/models/event-participant';
import * as moment from 'moment';

@Injectable()
export class AdditionalEventInfoService {

  constructor(private httpService: HttpService) {
  }

  getbubblesSum(event: Event) {
    let sum = 0;
    sum += event.alimentationBubbles.length;
    sum += event.checkboxBubbles.length;
    sum += event.freeBubbles.length;
    sum += event.planningBubbles.length;
    sum += event.surveyBubbles.length;
    sum += event.travelBubbles.length;
    return sum;
  }

  getParticipants(event: Event) {
    let n = 0;
    event.participationRefs.forEach(p => {
      if (p.answer === EventParticipantAnswer.YES) {
        n++;
      }
    });
    return n;
  }

  getRemainingDays(event: Event) {
    const a = moment(event.startDate);
    const b = moment(new Date());
    return a.diff(b, 'days');
  }
  getAdditionnalInfos(event: Event): Promise<AdditionnalEventInfos> {
    let additionnalInfos: AdditionnalEventInfos;

    return this.httpService.getGroup(event.groupRef).toPromise().then(group => {
      const groupName = group.name;
      const groupSize = group.memberships.length;
      const daysRemaining = '4 days';
      const location = '';

      additionnalInfos = {
        groupName: groupName,
        groupSize: groupSize,
        remainingDays: this.getRemainingDays(event),
        participants: this.getParticipants(event),
        location: location,
        bubblesNumber: this.getbubblesSum(event)
      };
    }).then(() => additionnalInfos);

  }

}
