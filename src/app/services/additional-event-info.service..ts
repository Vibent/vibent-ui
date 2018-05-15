import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {HttpService} from '../http/http.service';
import {AdditionnalEventInfos} from '../models/additionnal-event-infos';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AdditionalEventInfoService {

  constructor(private httpService: HttpService) {
  }

  getAdditionnalInfos(event: Event): Promise<AdditionnalEventInfos> {
    let additionnalInfos: AdditionnalEventInfos;

    return this.httpService.getGroup(event.groupRef).toPromise().then(group => {
      const groupName = group.name;
      const groupSize = group.memberRefs.length;
      const daysRemaining = '4 days';
      const location = 'cannes';
      const bubblesNumber = 4;

      additionnalInfos = {
        groupName: groupName,
        groupSize: groupSize,
        daysRemaining: daysRemaining,
        location: location,
        bubblesNumber: bubblesNumber
      };
    }).then(() => additionnalInfos);

  }

}
