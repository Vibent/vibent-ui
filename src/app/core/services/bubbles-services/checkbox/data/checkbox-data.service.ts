import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { CheckboxDataModel, CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';

@Injectable()
export class CheckboxDataService {

  user: User;

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  constructCheckboxDataModel(checkboxOption: CheckboxOption): CheckboxDataModel {
    return {
      answerUsers: this.getAnswerUsers(checkboxOption),
      disabled: this.getCheckIsDisabled(checkboxOption)
    };
  }

  getAnswerUsers(checkboxOption: CheckboxOption) {
    const users = [];
    checkboxOption.answers.map(answer => users.push(this.httpService.getUser(answer.userRef)));
    return users;
  }

  getCheckIsDisabled(checkboxOption: CheckboxOption) {
    return !!checkboxOption.answers.find(answer => answer.userRef !== this.user.ref);
  }

  isCurrentUserOption(checkboxOption: CheckboxOption) {
    return checkboxOption.userRef === this.user.ref;
  }

}