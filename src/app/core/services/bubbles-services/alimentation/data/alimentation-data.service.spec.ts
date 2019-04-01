import { AlimentationDataService } from './alimentation-data.service';
import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import {
  AlimentationEntry,
  AlimType
} from '../../../../../shared/models/bubbles/AlimentationBubble';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';

let alimentationDataService: AlimentationDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

let userAlimentationEntry: AlimentationEntry;
let otherAlimentationEntry: AlimentationEntry;

const user: User = {ref: 'ref'};

describe('Alimentation data Service', () => {

  beforeEach(() => {

    userManagementService = <UserManagementService>{
      getMe(userRef: string): User {
        return user;
      }
    };
    httpService = <HttpService> {
      getUser(userRef: string): Observable<User> {
        return of(user);
      }
    };

    userAlimentationEntry = {
      brings: [{
        quantity: 5,
        id: 0,
        userRef: 'ref'
      }],
      currentBringing: 5,
      name: 'name',
      totalRequested: 10,
      type: AlimType.DRINK,
    };

    otherAlimentationEntry = {
      brings: [{
        quantity: 20,
        id: 0,
        userRef: 'dummy'
      }],
      currentBringing: 20,
      name: 'name',
      totalRequested: 10,
      type: AlimType.DRINK,
    };

    alimentationDataService = new AlimentationDataService(userManagementService, httpService);
  });

  it('Check current user ratio in alimentation data model', () => {
    expect(alimentationDataService.getRatio(userAlimentationEntry)).toBe('5/10');
  });

  it('Check current user  bringingsByUsers in alimentation data model', () => {
    const bringingsByUsers = alimentationDataService.getBringsByUser(userAlimentationEntry)[0];
    expect(bringingsByUsers.quantity).toBe(5);
    expect(bringingsByUsers.id).toBe(0);
  });

  it('Check current user  bringingsByUsers in alimentation data model', () => {
    expect(alimentationDataService.getBarWidth(userAlimentationEntry)).toEqual('50%');
  });

  it('Check current user  bringingsByUsers in alimentation data model', () => {
    expect(alimentationDataService.getClassForDeleteBring(userAlimentationEntry)).toEqual('addAndDelete');
  });

  it('Check ratio in alimentation data model', () => {
    expect(alimentationDataService.getRatio(otherAlimentationEntry)).toBe('20/10');
  });

  it('Check bringingsByUsers in alimentation data model', () => {
    expect(alimentationDataService.getBarWidth(otherAlimentationEntry)).toEqual('200%');
  });

  it('Check bringingsByUsers in alimentation data model', () => {
    expect(alimentationDataService.getClassForDeleteBring(otherAlimentationEntry)).toEqual('addAndDeleteUnavailable');
  });


});