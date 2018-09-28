import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import * as io from 'socket.io-client';
import { Event } from '../../../shared/models/event';
import { HttpService } from '../../http/http.service';
import { AppSettings } from '../../../shared/global/constants';

@Injectable()
export class BlacknoteService {

  private BLACKNOTE_URL = AppSettings.BLACKNOTE_URL;
  private socket;
  @Output() eventUpdated: EventEmitter<Event> = new EventEmitter();
  NEW_EVENT_LISTENER = 'eventListener';
  EVENT_UPDATE_EMIT = 'eventUpdate';

  constructor(private httpService: HttpService) {
  }

  updateEvent(eventRef: string) {
    this.httpService.getEvent(eventRef).subscribe((event) => {
      this.eventUpdated.emit(event);
    });
  }

  private connect(): void {
    this.socket = io(this.BLACKNOTE_URL);
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  initConnectionForEventUpdate(eventRef: string) {
    this.connect();
    this.socket.emit(this.NEW_EVENT_LISTENER, eventRef);

    this.socket.on(this.EVENT_UPDATE_EMIT, (eventRef) => {
      this.updateEvent(eventRef);
    });
  }

  sendEventUpdate(eventRef: string) {
    this.socket.emit('eventUpdate', eventRef);
  }

}