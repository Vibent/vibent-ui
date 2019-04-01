import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { SurveyDataModel, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';
import { forkJoin, Observable } from 'rxjs';

@Injectable()
export class SurveyDataService {

  user: User;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  populateSurveyDataModel(surveyDataModel: SurveyDataModel, surveyOption: SurveyOption, answerCount: number) {
    surveyDataModel.userVoted = this.getUserVoted(surveyOption);
    surveyDataModel.votersNumber = this.getVotersNumber(surveyOption);
    surveyDataModel.votersNames = this.getVotersNames(surveyOption);
    surveyDataModel.progressWidth = this.getProgressWidth(answerCount, surveyOption);
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
      return new Promise(function(resolve) {
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
    return  Math.floor(surveyOption.answers.length / answerCount * 100) + '%';
  }
}
