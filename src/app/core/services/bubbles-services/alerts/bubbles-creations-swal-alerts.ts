import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';

@Injectable()
export class BubblesCreationsSwalAlerts {

  constructor() {
  }

  alertAlimentationBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.ALIMENTATION_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertCheckboxBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.CHECKBOX_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertSurveyBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.SURVEY_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertPlanningBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.PLANNING_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertTravelBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.TRAVEL_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }

  alertFreeBubbleCreated() {
    Swal({
      type: 'success',
      title: Messages.BUBBLE_CREATED,
      text: Messages.FREE_BUBBLE_CREATED,
      showConfirmButton: true,
    });
  }


}