import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { CheckboxBubble, CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';
import { CheckboxDataService } from './checkbox-data.service';

let checkboxDataService: CheckboxDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

let checkboxOption: CheckboxOption;
let checkboxBubble: CheckboxBubble;
const user: User = {ref: 'ref'};

describe('Checkbox data Service', () => {

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

    checkboxBubble = new CheckboxBubble();
    checkboxBubble.options = [checkboxOption];

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

  // getUserActivity
  it('Check getUserActivity general', () => {
    expect(checkboxDataService.getUserActivity(checkboxBubble)[0]).toBe('ref');
    expect(checkboxDataService.getUserActivity(checkboxBubble).length).toBe(2);
  });

  it('Check getUserActivity no options', () => {
    checkboxBubble.options = [];
    expect(checkboxDataService.getUserActivity(checkboxBubble).length).toBe(0);
  });

  // getAmountOptions
  it('Check getAmountOptions general', () => {
    expect(checkboxDataService.getAmountOptions(checkboxBubble)).toBe(1);
  });

  it('Check getAmountOptions no options', () => {
    checkboxBubble.options = [];
    expect(checkboxDataService.getAmountOptions(checkboxBubble)).toBe(0);
  });

  // getAmountUnchecked
  it('Check getAmountUnchecked general', () => {
    expect(checkboxDataService.getAmountUnchecked(checkboxBubble)).toBe(0);
  });

  it('Check getAmountUnchecked no options', () => {
    checkboxBubble.options = [];
    expect(checkboxDataService.getAmountUnchecked(checkboxBubble)).toBe(0);
  });

  it('Check getAmountUnchecked no answers', () => {
    checkboxBubble.options[0].answers = [];
    expect(checkboxDataService.getAmountUnchecked(checkboxBubble)).toBe(1);
  });

  // getUncheckedOptions
  it('Check getUncheckedOptions general', () => {
    checkboxBubble.options[0].answers = [];
    expect(checkboxDataService.getUncheckedOptions(checkboxBubble, 999).length).toBe(1);
  });

  it('Check getUncheckedOptions max amount should limit result', () => {
    checkboxBubble.options[0].answers = [];
    expect(checkboxDataService.getUncheckedOptions(checkboxBubble, 0).length).toBe(0);
  });

  it('Check getUncheckedOptions no options', () => {
    checkboxBubble.options = [];
    expect(checkboxDataService.getUncheckedOptions(checkboxBubble, 999).length).toBe(0);
  });

  it('Check getUncheckedOptions should return option', () => {
    checkboxBubble.options[0].answers = [];
    expect(checkboxDataService.getUncheckedOptions(checkboxBubble, 999)[0]).toBe(checkboxBubble.options[0]);
  });


});
