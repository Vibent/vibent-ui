import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from '../../../../../../../../shared/models/user';
import { CheckboxDataService } from '../../../../../../../../core/services/bubbles-services/checkbox/data/checkbox-data.service';
import { CheckboxDataModel, CheckboxOption } from '../../../../../../../../shared/models/bubbles/CheckboxBubble';
import { EventUpdateService } from '../../../../../../../../core/services/bubbles-services/event-update.service';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';
import { CheckboxHttpService } from '../../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';

@Component({
  selector: '[checkbox-option]',
  templateUrl: './checkbox-option.html',
  animations: [
    trigger('fadeInOut', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxOptionComponent implements OnInit {

  @Input()
  checkboxOption: CheckboxOption;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedCheckboxOptions = new EventEmitter<CheckboxOption>();
  user: User;
  checkboxDataModel: CheckboxDataModel;

  constructor(private checkboxHttpService: CheckboxHttpService,
              private checkboxDataService: CheckboxDataService,
              private eventUpdateService: EventUpdateService,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  onCheckBoxClick(event) {
    if (event.srcElement.checked) {
      this.checkboxOption.answers.push({userRef: this.user.ref, optionId: this.checkboxOption.id});
      this.constructAlimentationDataModel();
      this.checkboxHttpService.createAnswer({optionId: this.checkboxOption.id}).subscribe(() => {
        this.eventUpdateService.updateEvent(this.eventRef);
      });
    }
    else {
      this.checkboxOption.answers
        .splice(this.checkboxOption.answers
          .findIndex(answer => answer.userRef === this.user.ref), 1);
      this.constructAlimentationDataModel();
      this.checkboxHttpService.deleteAnswerOfOption(this.checkboxOption).subscribe(() => {
        this.eventUpdateService.updateEvent(this.eventRef);
      });
    }
    this.updatedCheckboxOptions.emit(this.checkboxOption);
  }

  ngOnInit(): void {
    this.constructAlimentationDataModel();
  }

  constructAlimentationDataModel() {
    this.checkboxDataModel = this.checkboxDataService.constructCheckboxDataModel(this.checkboxOption);
  }

}
