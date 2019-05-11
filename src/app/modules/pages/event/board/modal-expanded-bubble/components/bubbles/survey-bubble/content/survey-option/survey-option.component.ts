import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { User } from '../../../../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SurveyDataModel, SurveyOption } from '../../../../../../../../../../shared/models/bubbles/SurveyBubble';
import { SurveyDataService } from '../../../../../../../../../../core/services/bubbles-services/survey/data/survey-data.service';
import { SurveyHttpService } from '../../../../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'survey-option',
  templateUrl: './survey-option.html',
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
export class SurveyOptionComponent implements OnInit, OnChanges, OnDestroy {

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

  ngOnDestroy(): void {
  }

}
