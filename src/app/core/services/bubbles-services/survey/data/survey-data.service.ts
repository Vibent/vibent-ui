import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import {
  SurveyBubble,
  SurveyDataModel,
  SurveyOption
} from '../../../../../shared/models/bubbles/SurveyBubble';
import {
  forkJoin,
  Observable
} from 'rxjs';

@Injectable()
export class SurveyDataService {

  user: User;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  populateSurveyDataModel(surveyDataModel: SurveyDataModel, surveyOption: SurveyOption, answerCount: number) {
    surveyDataModel.isCurrentUserOption = this.isCurrentUserOption(surveyOption),
      surveyDataModel.userVoted = this.getUserVoted(surveyOption);
    surveyDataModel.votersNumber = this.getVotersNumber(surveyOption);
    surveyDataModel.votersNames = this.getVotersNames(surveyOption);
    surveyDataModel.progressWidth = this.getProgressWidth(answerCount, surveyOption);
  }

  isCurrentUserOption(surveyOption: SurveyOption) {
    return this.user.ref === surveyOption.userRef;
  }

  getUserVoted(surveyOption: SurveyOption) {
    return !!surveyOption.answers.find(answer => answer.userRef === this.user.ref);
  }

  getVotersNumber(surveyOption: SurveyOption) {
    return '+' + surveyOption.answers.length;
  }

  async getVotersNames(surveyOption: SurveyOption) {
    const observables: Observable<User>[] = [];
    for (const answer of surveyOption.answers) {
      observables.push(this.httpService.getUser(answer.userRef));
    }
    let usersString = '';
    if (observables.length === 0) {
      return new Promise(function (resolve) {
        resolve('No voters');
      });
    }
    return await forkJoin(observables).toPromise().then((users) => {
      for (const user of users) {
        usersString += user.firstName + ' ' + user.lastName + '<br\>';
      }
    }).then(() => usersString);
  }

  getProgressWidth(answerCount: number, surveyOption: SurveyOption) {
    if (!answerCount) {
      return '0%';
    }
    return Math.floor(surveyOption.answers.length / answerCount * 100) + '%';
  }

  getMostAnswerCount(bubble: SurveyBubble): number {
    if (bubble.options.length === 0) {
      return 0;
    }
    const mostAnswerOption = bubble.options.sort((a, b) => b.answers.length - a.answers.length);
    return mostAnswerOption[0].answers.length;
  }

  getOptionPercentByMostAnswered(option: SurveyOption, bubble: SurveyBubble): number {
    const mostAnswered = this.getMostAnswerCount(bubble);
    if (mostAnswered === 0) {
      return 0;
    }
    return (option.answers.length / mostAnswered) * 100;
  }

  getUserActivity(bubble: SurveyBubble): string[] {
    const options = bubble.options;
    let userRefs = [];
    if (options.length !== 0) {
      userRefs = userRefs.concat(options.map(o => o.userRef));

      const optionAnswers = options.map(o => o.answers);
      if (optionAnswers.length !== 0) {
        const answers = optionAnswers.reduce((c, n) => c.concat(n));
        userRefs = userRefs.concat(answers.map(a => a.userRef));
      }
    }
    return userRefs;
  }

  getTopAnswers(bubble: SurveyBubble, maxAmount: number): SurveyOption[] {
    const sortedOptions = bubble.options.sort((a, b) => b.answers.length - a.answers.length);
    return sortedOptions.slice(0, maxAmount);
  }
}
