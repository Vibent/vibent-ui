import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from '../http/http.service';
import { LoaderService } from './loader/service/loader.service';
import { Event } from '../../shared/models/event';
import { NotificationsService, NotificationType } from './notifications.service';
import { Messages } from '../../shared/messages-codes/messages';

@Injectable()
export class EventAdminPanelService {

  isOpen = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();

  constructor(private httpService: HttpService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService) {
  }

  toggleEventPanel(response: any) {
    this.isOpen = response.isOpen;
    this.change.emit(response);
  }

  updateEvent(event: Event) {
    this.httpService.updateEvent(event).subscribe((updatedEvent) => {
      this.eventUpdated.emit(updatedEvent);
      this.loaderService.closeLoadingPageModal();
      this.notificationService.notify(Messages.EVENT_UPDATED, NotificationType.SUCCESS);
    });
  }

}
