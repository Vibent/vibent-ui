import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Group } from '../../shared/models/group';
import { LoaderService } from './loader/service/loader.service';
import { NotificationsService, NotificationType } from './notifications.service';
import { Messages } from '../../shared/messages-codes/messages';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class GroupAdminPanelService {

  change$ = new BehaviorSubject<string>(null);
  groupUpdated$ = new Subject<Group>();

  constructor(private httpService: HttpService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService) {
  }

  toggleGroupPanel(groupRef: string) {
    this.change$.next(groupRef);
  }

  closeGroupPanel() {
    this.change$.next(null);
  }

  updateGroup(group: Group) {
    this.httpService.updateGroup(group).subscribe((updatedGroup) => {
      this.groupUpdated$.next(updatedGroup);
      this.loaderService.closeLoadingPageModal();
      this.notificationService.notify(Messages.GROUP_UPDATED, NotificationType.SUCCESS);
    });
  }
}
