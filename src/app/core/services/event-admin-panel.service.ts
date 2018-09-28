import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable()
export class EventAdminPanelService {

  isOpen = false;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  toggleEventPanel(response: any) {
    this.isOpen = response.isOpen;
    this.change.emit(response);
  }

}
