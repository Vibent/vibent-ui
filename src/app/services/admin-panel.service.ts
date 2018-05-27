import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpService} from '../http/http.service';
import {Group} from '../models/group';

@Injectable()
export class AdminPanelService {
  isOpen = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() groupUpdated: EventEmitter<Group> = new EventEmitter();

  constructor(private httpService: HttpService) {}

  toggleGroupPanel(response: any) {
    this.isOpen = response.isOpen;
    this.change.emit(response);
  }

  updateGroup(group: Group) {
    this.httpService.updateGroup(group).subscribe((updatedGroup) => {
      this.groupUpdated.emit(updatedGroup);
    });
  }
}
