import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { SurveyDataService } from './survey-data.service';
import { SurveyBubble, SurveyDataModel, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';

let surveyDataService: SurveyDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

const surveyDataModel = new SurveyDataModel();
let option: SurveyOption;
let option2: SurveyOption;
let bubble: SurveyBubble;
let answerCount: number;

const user: User = {ref: 'ref'};

describe('Survey data Service', () => {

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

    // answer count is set to 5 even if it's not consistent with tested data
    answerCount = 5;
    option = {
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

    option2 = {
      bubbleId: 0,
      answers: [{
        id: 0,
        optionId: 0,
        userRef: 'unknownRef'
      }],
      content: 'content',
      id: 1,
      userRef: 'ref2'
    };

    bubble = new SurveyBubble();
    bubble.options = [option];
    bubble.answerCount = 2;

    surveyDataService = new SurveyDataService(userManagementService, httpService);
  });

  it('Check votersNames is populated', () => {
    spyOn(surveyDataService, 'getVotersNames').and.returnValue(Promise.resolve('ref name <br>'));
    surveyDataService.populateSurveyDataModel(surveyDataModel, option, answerCount);
    expect(surveyDataModel.votersNames).toBeDefined();
    surveyDataModel.votersNames.then(((result) => {
      expect(result).toBe('ref name <br>');
    }));
  });

  it('Check votersNumber is correctly set', () => {
    expect(surveyDataService.getVotersNumber(option)).toBe('+2');
  });

  it('Check votersNumber after a push is correctly set', () => {
    option.answers.push({});
    expect(surveyDataService.getVotersNumber(option)).toBe('+3');
  });

  it('Check progressWidth is correctly set', () => {
    expect(surveyDataService.getProgressWidth(answerCount, option)).toBe('40%');
  });

  it('Check progressWidth is correctly set on big answerCount change', () => {
    answerCount = 200;
    expect(surveyDataService.getProgressWidth(answerCount, option)).toBe('1%');
  });

  it('Check progressWidth is correctly set on small answerCount change', () => {
    answerCount = 2;
    expect(surveyDataService.getProgressWidth(answerCount, option)).toBe('100%');
  });

  it('Check progressWidth is correctly set with negative answerCount', () => {
    answerCount = 0;
    expect(surveyDataService.getProgressWidth(answerCount, option)).toBe('0%');
  });

  it('Check progressWidth is correctly set when user did not voted', () => {
    expect(surveyDataService.getUserVoted(option)).toBe(false);
  });

  it('Check progressWidth is correctly set when user voted', () => {
    option.answers[0].userRef = 'ref';
    expect(surveyDataService.getUserVoted(option)).toBe(true);
  });

  // getMostAnswerCount
  it('Check getMostAnswerCount general', () => {
    expect(surveyDataService.getMostAnswerCount(bubble)).toBe(2);
  });

  it('Check getMostAnswerCount no options', () => {
    bubble.options = [];
    expect(surveyDataService.getMostAnswerCount(bubble)).toBe(0);
  });

  it('Check getMostAnswerCount no answers', () => {
    bubble.options[0].answers = [];
    expect(surveyDataService.getMostAnswerCount(bubble)).toBe(0);
  });

  // getOptionPercentByMostAnswered
  it('Check getOptionPercentByMostAnswered general', () => {
    expect(surveyDataService.getOptionPercentByMostAnswered(option, bubble)).toBe(100);
  });

  it('Check getOptionPercentByMostAnswered no options', () => {
    bubble.options = [];
    expect(surveyDataService.getOptionPercentByMostAnswered(option, bubble)).toBe(0);
  });

  it('Check getOptionPercentByMostAnswered no answers', () => {
    bubble.options[0].answers = [];
    expect(surveyDataService.getOptionPercentByMostAnswered(option, bubble)).toBe(0);
  });

  // getUserActivity
  it('Check getUserActivity general', () => {
    expect(surveyDataService.getUserActivity(bubble).length).toBe(3);
  });

  it('Check getUserActivity no options', () => {
    bubble.options = [];
    expect(surveyDataService.getUserActivity(bubble).length).toBe(0);
  });

  it('Check getUserActivity no answers', () => {
    bubble.options[0].answers = [];
    expect(surveyDataService.getUserActivity(bubble).length).toBe(1);
  });

  it('Check getUserActivity adds both options and answers userRefs', () => {
    const userActivity = surveyDataService.getUserActivity(bubble);
    expect(userActivity.indexOf('unknownRef')).not.toBe(-1);
    expect(userActivity.indexOf('ref')).not.toBe(-1);
  });

  // getTopAnswers
  it('Check getTopAnswers general', () => {
    expect(surveyDataService.getTopAnswers(bubble, 3)[0].id).toBe(option.id);
  });

  it('Check getTopAnswers max items should limit return length', () => {
    bubble.options = [];
    expect(surveyDataService.getTopAnswers(bubble, 0).length).toBe(0);
  });

  it('Check getTopAnswers sorts items and includes options with no answers', () => {
    bubble.options = [option2, option];
    expect(surveyDataService.getTopAnswers(bubble, 3)[0].id).toBe(0);
    expect(surveyDataService.getTopAnswers(bubble, 3)[1].id).toBe(1);
  });

  it('Check isCurrentUserOption is correctly set to false', () => {
    answerCount = 200;
    expect(surveyDataService.isCurrentUserOption(option2)).toBe(false);
  });

  it('Check isCurrentUserOption is correctly set to true', () => {
    answerCount = 200;
    expect(surveyDataService.isCurrentUserOption(option)).toBe(true);
  });
});
