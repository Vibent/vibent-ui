import { Injectable } from '@angular/core';
import { MessageService } from '../../i18n/message.service';
import { NotificationsService, NotificationType } from '../../notifications.service';

@Injectable()
export class BubblesCreationsNotification {

  constructor(private messageService: MessageService,
              private notificationService: NotificationsService) {
  }

  alertAlimentationBubbleCreated() {
    this.notificationService.notify(this.messageService.ALIMENTATION_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

  alertCheckboxBubbleCreated() {
    this.notificationService.notify(this.messageService.CHECKBOX_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

  alertSurveyBubbleCreated() {
    this.notificationService.notify(this.messageService.SURVEY_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

  alertPlanningBubbleCreated() {
    this.notificationService.notify(this.messageService.PLANNING_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

  alertTravelBubbleCreated() {
    this.notificationService.notify(this.messageService.TRAVEL_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

  alertFreeBubbleCreated() {
    this.notificationService.notify(this.messageService.FREE_BUBBLE_CREATED, NotificationType.SUCCESS);
  }

}