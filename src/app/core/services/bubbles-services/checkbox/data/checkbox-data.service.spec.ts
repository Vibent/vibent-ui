import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';
import { CheckboxDataService } from './checkbox-data.service';

let checkboxDataService: CheckboxDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

let checkboxOption: CheckboxOption;
const user: User = {ref: 'ref'};

describe('Checkbox data Service', () => {

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

    checkboxOption = {
      bubbleId: 0,
      answers:
        [{
          optionId: 0,
          id: 0,
          userRef: 'ref'
        }],
      content: 'content',
      id: 0,
      userRef: 'ref'
    };

    checkboxDataService = new CheckboxDataService(userManagementService, httpService);
  });

  it('Check current user checkbox isn\'t disabled', () => {
    expect(checkboxDataService.getCheckIsDisabled(checkboxOption)).toBe(false);
  });

  it('Check getAnswerUsers return current user', () => {
    checkboxDataService.getAnswerUsers(checkboxOption)[0].subscribe((received: User) => {
      expect(received).toBe(user);
    });
  });

  it('Check other user checkbox is disabled', () => {
    checkboxOption.answers = [{
      optionId: 0,
      id: 0,
      userRef: 'dummyRef'
    }];
    expect(checkboxDataService.getCheckIsDisabled(checkboxOption)).toBe(true);
  });

  it('Check checkbox is enabled if there is no answer', () => {
    checkboxOption.answers = [];
    expect(checkboxDataService.getCheckIsDisabled(checkboxOption)).toBe(false);
  });


});