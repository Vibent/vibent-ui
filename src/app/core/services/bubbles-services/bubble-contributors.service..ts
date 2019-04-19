import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user';
import { HttpService } from '../../http/http.service';
import { MostActiveUsers } from '../../../shared/models/most-active-users';

@Injectable()
export class BubbleContributorsService {

  constructor(private httpService: HttpService) {
  }

  public getMostActiveUsers(userRefs: string[], maxItems: number): MostActiveUsers {
    const mostActiveUserRefs = this.getMostActiveUserRefsList(userRefs, maxItems);
    const userArray: Observable<User>[] = [];

    const amount = mostActiveUserRefs.length;
    const remainingAmount = Math.max(new Set(userRefs).size - maxItems, 0);

    for (let i = 0; i < mostActiveUserRefs.length; i++) {
      userArray.push(this.httpService.getUser(mostActiveUserRefs[i]));
    }

    return new MostActiveUsers(
      userArray,
      amount,
      remainingAmount
    );
  }

  private getMostActiveUserRefsList(userRefs: string[], maxItems: number): string[] {
    const participantActivity = {};
    userRefs.forEach(userRef => {
      participantActivity[userRef] = (participantActivity[userRef] + 1) | 1;
    });

    const result = [];
    for (let i = 0; i < maxItems; i++) {
      const mostCommon = this.getMostCommonElement(participantActivity);
      if (mostCommon !== null) {
        result.push(mostCommon);
        delete participantActivity[mostCommon];
      }
    }

    return result;
  }

  private getMostCommonElement(values: {}) {
    let topCount = 0;
    let topValue = null;
    for (const key in values) {
      if (values[key] > topCount) {
        topValue = key;
        topCount = values[key];
      }
    }
    return topValue;
  }
}
