import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import { CheckboxBubble, CheckboxDataModel, CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';

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

  getUserActivity(bubble: CheckboxBubble): string[] {
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

  getAmountOptions(bubble: CheckboxBubble): number {
    return bubble.options.length;
  }

  getAmountUnchecked(bubble: CheckboxBubble): number {
    return bubble.options.filter(o => o.answers.length === 0).length;
  }

  getUncheckedOptions(bubble: CheckboxBubble, maxAmount: number): CheckboxOption[] {
    return bubble.options.filter(o => o.answers.length === 0).slice(0, maxAmount);
  }
}
