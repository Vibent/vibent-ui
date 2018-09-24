import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Event } from '../../shared/models/event';

@Injectable()
export class EventAdminPanelService {

  isOpen = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();

  constructor(private httpService: HttpService) {
  }

  toggleEventPanel(response: any) {
    this.isOpen = response.isOpen;
    this.change.emit(response);
  }

  updateEvent(event: Event) {
  }
}
