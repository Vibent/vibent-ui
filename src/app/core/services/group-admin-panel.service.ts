import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Group } from '../../shared/models/group';
import { LoaderService } from './loader/service/loader.service';
import { NotificationsService, NotificationType } from './notifications.service';
import { Messages } from '../../shared/messages-codes/messages';

@Injectable()
export class GroupAdminPanelService {

  isOpen = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() groupUpdated: EventEmitter<Group> = new EventEmitter();

  constructor(private httpService: HttpService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService) {
  }

  toggleGroupPanel(response: any) {
    this.isOpen = response.isOpen;
    this.change.emit(response);
  }

  updateGroup(group: Group) {
    this.httpService.updateGroup(group).subscribe((updatedGroup) => {
      this.groupUpdated.emit(updatedGroup);
      this.loaderService.closeLoadingPageModal();
      this.notificationService.notify(Messages.GROUP_UPDATED, NotificationType.SUCCESS);
    });
  }
}
