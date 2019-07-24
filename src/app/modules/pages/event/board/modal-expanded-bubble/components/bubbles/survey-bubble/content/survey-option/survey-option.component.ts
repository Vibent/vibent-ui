import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { User } from '../../../../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import {
  SurveyBubble,
  SurveyDataModel,
  SurveyOption
} from '../../../../../../../../../../shared/models/bubbles/SurveyBubble';
import { SurveyDataService } from '../../../../../../../../../../core/services/bubbles-services/survey/data/survey-data.service';
import { SurveyHttpService } from '../../../../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';
import Swal from 'sweetalert2';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'survey-option',
  templateUrl: './survey-option.html',
  styleUrls: ['./survey-option.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyOptionComponent implements OnInit, OnChanges {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  surveyOption: SurveyOption;
  @Input()
  answerCount: number;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedAnswerCount = new EventEmitter<number>();
  user: User;
  surveyDataModel: SurveyDataModel = new SurveyDataModel();

  constructor(private surveyHttpService: SurveyHttpService,
              private messageService: MessageService,
              private surveyDataService: SurveyDataService,
              private eventUpdateService: EventUpdateService,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    $('body').on('click', (e) => {
      if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) {
        $('[data-toggle="popover"]').popover('hide');
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.constructAlimentationDataModel();
  }

  onVote() {
    this.surveyDataModel.userVoted = !this.surveyDataModel.userVoted;
    this.answerCount = this.answerCount + 1;
    this.updatedAnswerCount.emit(this.answerCount);
    this.surveyOption.answers.push({userRef: this.user.ref});
    this.surveyHttpService.createAnswer({optionId: this.surveyOption.id}).subscribe((updated) => {
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.SurveyBubble});
    });
  }

  removeVote() {
    this.surveyDataModel.userVoted = !this.surveyDataModel.userVoted;
    this.answerCount = this.answerCount - 1;
    this.updatedAnswerCount.emit(this.answerCount);
    this.surveyOption.answers
      .splice(this.surveyOption.answers
        .findIndex(answer => answer.userRef === this.user.ref), 1);
    this.surveyHttpService.deleteAnswerOfOption(this.surveyOption).subscribe(() => {
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.SurveyBubble});
    });
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
        this.surveyBubble.options
          .splice(this.surveyBubble.options
            .findIndex(option => option.id === this.surveyOption.id), 1);
        this.surveyHttpService.deleteOption(this.surveyOption).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef);
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.CheckboxBubble});
        });
      }
    });
  }

  constructAlimentationDataModel() {
    this.surveyDataService.populateSurveyDataModel(this.surveyDataModel, this.surveyOption, this.answerCount);
    this.surveyDataModel.votersNames.then((value) => {
      $(() => {
        $('#popover' + this.surveyOption.id).popover({
          content: value,
          html: true
        });
      });
    });
  }

}
