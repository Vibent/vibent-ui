import { BubbleContributorsService } from './bubble-contributors.service.';
import { HttpService } from '../../http/http.service';
import { Observable, of } from 'rxjs';
import { User } from '../../../shared/models/user';
import { async } from '@angular/core/testing';

let bubbleContributorsService: BubbleContributorsService;
let httpService: HttpService;

describe('Bubble contributors Service', () => {

  beforeEach(() => {

    httpService = <HttpService>{
      getUser(userRef: string): Observable<User> {
        return of({ref: userRef});
      }
    };

    bubbleContributorsService = new BubbleContributorsService(httpService);
  });

  it('Items should be ordered by most active', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1'], 2);
    mostActiveUsers.users[0].subscribe(user => {
      expect(user.ref).toEqual('ref1');
    });
    mostActiveUsers.users[1].subscribe(user => {
      expect(user.ref).toEqual('ref2');
    });
  }));

  it('Should work with empty array', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers([], 1);
    expect(mostActiveUsers.users.length).toEqual(0);
  }));

  it('Remaining items should not be negative', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1'], 10);
    expect(mostActiveUsers.amountRemaining).toEqual(0);
  }));

  it('Remaining items should be 0', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1'], 2);
    expect(mostActiveUsers.amountRemaining).toEqual(0);
  }));

  it('Remaining items should be number of different refs - max items', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1', 'ref3'], 2);
    expect(mostActiveUsers.amountRemaining).toEqual(1);
  }));

  it('Number of items should be number of max items if smaller', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1', 'ref3'], 2);
    expect(mostActiveUsers.amount).toEqual(2);
  }));

  it('Number of items should be number of different refs if smaller', async(() => {
    const mostActiveUsers = bubbleContributorsService.getMostActiveUsers(['ref2', 'ref1', 'ref1', 'ref3'], 4);
    expect(mostActiveUsers.amount).toEqual(3);
  }));
});
