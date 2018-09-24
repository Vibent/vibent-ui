import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { CheckboxDataModel, CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';

@Injectable()
export class CheckboxDataService {

  user: User;
  checkboxOption: CheckboxOption;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  constructCheckboxDataModel(checkboxOption: CheckboxOption): CheckboxDataModel {
    this.checkboxOption = checkboxOption;
    return {
      answerUsers: this.getAnswerUsers()
    };
  }

  getAnswerUsers() {
    const users = [];
    this.checkboxOption.answers.map(answer => users.push(this.httpService.getUser(answer.userRef)));
    return users;
  }

}