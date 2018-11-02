import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BubbleType, IBubble } from '../../../../../../shared/models/bubbles/IBubble';
import { AlimentationHttpService } from '../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import Swal from 'sweetalert2';
import { EventUpdateService } from '../../../../../../core/services/bubbles-services/event-update.service';
import { NotificationsService, NotificationType } from '../../../../../../core/services/notifications.service';
import { SurveyHttpService } from '../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { CheckboxHttpService } from '../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';

declare const $: any;

@Component({
  selector: 'settings-delete-bubble',
  templateUrl: './settings-delete-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDeleteBubbleComponent {

  constructor(private alimentationHttpService: AlimentationHttpService,
              private surveyHttpService: SurveyHttpService,
              private checkboxHttpService: CheckboxHttpService,
              private notificationService: NotificationsService,
              private eventUpdateService: EventUpdateService) {
  }

  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;
  @Output()
  bubbleDeleted = new EventEmitter<any>();

  deleteBubble() {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      reverseButtons: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.delete();
      }
    });

  }

  delete() {
    console.log(this.bubble);
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
      default:
        break;
    }
    this.notificationService.notify('Bubble deleted', NotificationType.SUCCESS);
    $('#expanded-bubble').modal('hide');
    this.bubbleDeleted.emit();
  }

}
