import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { SurveyDataModel, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyDataService {

  user: User;
  surveyOption: SurveyOption;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  constructSurveyDataModel(surveyDataModel: SurveyDataModel, surveyOption: SurveyOption, answerCount: number) {
    this.surveyOption = surveyOption;
    surveyDataModel.userVoted = this.getUserVoted();
    surveyDataModel.votersNumber = this.getVotersNumber();
    surveyDataModel.votersNames = this.getVotersNames();
    surveyDataModel.progressWidth = this.progressWidth(answerCount);
  }

  getUserVoted() {
    return !!this.surveyOption.answers.find(answer => answer.userRef === this.user.ref);
  }

  getVotersNumber() {
    return '+' + this.surveyOption.answers.length;
  }

  async getVotersNames() {
    const observables: Observable<User>[] = [];
    for (const answer of this.surveyOption.answers) {
      observables.push(this.httpService.getUser(answer.userRef));
    }
    let usersString = '';
    if (observables.length === 0) {
      return new Promise(function(resolve) {
        resolve('No voters');
      });
    }
    return await Observable.forkJoin(observables).toPromise().then((users) => {
      for (const user of users) {
        usersString += user.firstName + ' ' + user.lastName + '<br\>';
      }
    }).then(() => usersString);
  }

  progressWidth(answerCount: number) {
    if (!answerCount) {
      return '0%';
    }
    return  Math.floor(this.surveyOption.answers.length / answerCount * 100) + '%';
  }
}