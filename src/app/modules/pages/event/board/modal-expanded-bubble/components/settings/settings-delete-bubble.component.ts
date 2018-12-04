import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlimentationHttpService } from '../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { SurveyHttpService } from '../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { CheckboxHttpService } from '../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import { NotificationsService, NotificationType } from '../../../../../../../core/services/notifications.service';
import { BubbleType, IBubble } from '../../../../../../../shared/models/bubbles/IBubble';
import { PlanningHttpService } from '../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';

import Swal from 'sweetalert2';
import { TravelHttpService } from '../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { Messages, SwalColors } from '../../../../../../../shared/messages-codes/messages';
import { FreeHttpService } from '../../../../../../../core/services/bubbles-services/free/http/free-http.service';

declare const $: any;

@Component({
  selector: 'settings-delete-bubble',
  templateUrl: './settings-delete-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDeleteBubbleComponent {

  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;
  @Output()
  bubbleDeleted = new EventEmitter<any>();

  constructor(private alimentationHttpService: AlimentationHttpService,
              private surveyHttpService: SurveyHttpService,
              private checkboxHttpService: CheckboxHttpService,
              private planningHttpService: PlanningHttpService,
              private travelHttpService: TravelHttpService,
              private freeHttpService: FreeHttpService,
              private notificationService: NotificationsService,
              private eventUpdateService: EventUpdateService) {
  }

  deleteBubble() {
    Swal({
      title: Messages.ARE_YOU_SURE,
      text: Messages.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: SwalColors.CONFIRM_BUTTON,
      reverseButtons: true,
      cancelButtonColor: SwalColors.CANCEL_BUTTON,
      confirmButtonText: Messages.DELETE
    }).then((result) => {
      if (result.value) {
        this.delete();
      }
    });

  }

  delete() {
    switch (this.bubble.type) {
      case BubbleType.AlimentationBubble:
        this.alimentationHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      case BubbleType.SurveyBubble:
        this.surveyHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      case BubbleType.CheckboxBubble:
        this.checkboxHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      case BubbleType.PlanningBubble:
        this.planningHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      case BubbleType.TravelBubble:
        this.travelHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      case BubbleType.FreeBubble:
        this.freeHttpService.deleteBubble(this.bubble).subscribe(() => this.eventUpdateService.updateEvent(this.eventRef));
        break;
      default:
        break;
    }
    this.notificationService.notify('Bubble deleted', NotificationType.SUCCESS);
    $('#expanded-bubble').modal('hide');
    this.bubbleDeleted.emit();
  }

}
