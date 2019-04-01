import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { SurveyDataService } from './survey-data.service';
import { SurveyDataModel, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';

let surveyDataService: SurveyDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

const surveyDataModel = new SurveyDataModel();
let surveyOption: SurveyOption;
let answerCount: number;

const user: User = {ref: 'ref'};

describe('Survey data Service', () => {

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

    // answer count is set to 5 even if it's not consistent with tested data
    answerCount = 5;
    surveyOption = {
      bubbleId: 0,
      answers: [{
        id: 0,
        optionId: 0,
        userRef: 'unknownRef'
      },
        {
          id: 1,
          optionId: 0,
          userRef: 'unknownRef2'
        }],
      content: 'content',
      id: 0,
      userRef: 'ref'
    };

    surveyDataService = new SurveyDataService(userManagementService, httpService);
  });

  it('Check votersNames is populated', () => {
    spyOn(surveyDataService, 'getVotersNames').and.returnValue(Promise.resolve('ref name <br>'));
    surveyDataService.populateSurveyDataModel(surveyDataModel, surveyOption, answerCount);
    expect(surveyDataModel.votersNames).toBeDefined();
    surveyDataModel.votersNames.then(((result) => {
      expect(result).toBe('ref name <br>');
    }));
  });

  it('Check votersNumber is correctly set', () => {
    expect(surveyDataService.getVotersNumber(surveyOption)).toBe('+2');
  });

  it('Check votersNumber after a push is correctly set', () => {
    surveyOption.answers.push({});
    expect(surveyDataService.getVotersNumber(surveyOption)).toBe('+3');
  });

  it('Check progressWidth is correctly set', () => {
    expect(surveyDataService.getProgressWidth(answerCount, surveyOption)).toBe('40%');
  });

  it('Check progressWidth is correctly set on big answerCount change', () => {
    answerCount = 200;
    expect(surveyDataService.getProgressWidth(answerCount, surveyOption)).toBe('1%');
  });

  it('Check progressWidth is correctly set on small answerCount change', () => {
    answerCount = 2;
    expect(surveyDataService.getProgressWidth(answerCount, surveyOption)).toBe('100%');
  });

  it('Check progressWidth is correctly set with negative answerCount', () => {
    answerCount = 0;
    expect(surveyDataService.getProgressWidth(answerCount, surveyOption)).toBe('0%');
  });

  it('Check progressWidth is correctly set when user did not voted', () => {
    expect(surveyDataService.getUserVoted(surveyOption)).toBe(false);
  });

  it('Check progressWidth is correctly set when user voted', () => {
    surveyOption.answers[0].userRef = 'ref';
    expect(surveyDataService.getUserVoted(surveyOption)).toBe(true);
  });

});