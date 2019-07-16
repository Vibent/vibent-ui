import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from '../../../../../../../../../../shared/models/user';
import { CheckboxDataService } from '../../../../../../../../../../core/services/bubbles-services/checkbox/data/checkbox-data.service';
import {
  CheckboxBubble,
  CheckboxDataModel,
  CheckboxOption
} from '../../../../../../../../../../shared/models/bubbles/CheckboxBubble';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { CheckboxHttpService } from '../../../../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import Swal from 'sweetalert2';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

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
  checkboxBubble: CheckboxBubble;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedCheckboxOptions = new EventEmitter<CheckboxOption>();
  @Output()
  updatedCheckboxBubble = new EventEmitter<CheckboxBubble>();
  user: User;
  checkboxDataModel: CheckboxDataModel;
  isCurrentUserOption = false;

  constructor(private checkboxHttpService: CheckboxHttpService,
              private checkboxDataService: CheckboxDataService,
              private eventUpdateService: EventUpdateService,
              private userManagementService: UserManagementService,
              private messageService: MessageService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    this.constructCheckboxDataModel();
  }

  onCheckBoxClick(event) {
    if (event.srcElement.checked) {
      this.checkboxOption.answers.push({userRef: this.user.ref, optionId: this.checkboxOption.id});
      this.constructCheckboxDataModel();
      this.checkboxHttpService.createAnswer({optionId: this.checkboxOption.id}).subscribe(() => {
        this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.CheckboxBubble});
      });
    }
    else {
      this.checkboxOption.answers
        .splice(this.checkboxOption.answers
          .findIndex(answer => answer.userRef === this.user.ref), 1);
      this.constructCheckboxDataModel();
      this.checkboxHttpService.deleteAnswerOfOption(this.checkboxOption).subscribe(() => {
        this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.CheckboxBubble});
      });
    }
    this.updatedCheckboxOptions.emit(this.checkboxOption);
  }

  deleteOption() {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.checkboxHttpService.deleteOption(this.checkboxOption).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef);
          this.checkboxBubble.options
            .splice(this.checkboxBubble.options
              .findIndex(option => option.id === this.checkboxOption.id), 1);
          this.updatedCheckboxBubble.emit(this.checkboxBubble);
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.CheckboxBubble});
        });
      }
    });
  }

  constructCheckboxDataModel() {
    this.checkboxDataModel = this.checkboxDataService.constructCheckboxDataModel(this.checkboxOption);
    this.isCurrentUserOption = this.checkboxDataService.isCurrentUserOption(this.checkboxOption);
  }

}
