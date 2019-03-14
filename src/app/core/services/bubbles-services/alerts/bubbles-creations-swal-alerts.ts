import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MessageService } from '../../i18n/message.service';

@Injectable()
export class BubblesCreationsSwalAlerts {

  constructor(private messageService: MessageService) {
  }

  alertAlimentationBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.ALIMENTATION_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertCheckboxBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.CHECKBOX_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertSurveyBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.SURVEY_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertPlanningBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.PLANNING_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertTravelBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.TRAVEL_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertFreeBubbleCreated() {
    Swal({
      type: 'success',
      title: this.messageService.BUBBLE_CREATED,
      text: this.messageService.FREE_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }


}