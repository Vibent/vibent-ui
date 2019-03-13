import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { LoaderService } from './loader/service/loader.service';
import { Event } from '../../shared/models/event';
import { NotificationsService, NotificationType } from './notifications.service';
import { EventUpdateService } from './bubbles-services/event-update.service';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from './i18n/message.service';

@Injectable()
export class EventAdminPanelService {

  change$ = new BehaviorSubject(null);

  constructor(private httpService: HttpService,
              private eventUpdateService: EventUpdateService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService,
              private messageService: MessageService) {
  }

  toggleEventPanel(eventRef: string) {
    this.change$.next(eventRef);
  }

  closeEventPanel() {
    this.change$.next(null);
  }

  updateEvent(event: Event) {
    this.httpService.updateEvent(event).subscribe(() => {
      this.eventUpdateService.updateEvent(event.ref);
      this.loaderService.closeLoadingPageModal();
      this.notificationService.notify(this.messageService.EVENT_UPDATED, NotificationType.SUCCESS);
    });
  }

}
