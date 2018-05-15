import { Component, OnInit } from '@angular/core';
import {EventParticipant} from '../models/event-participant';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../models/event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  participants: EventParticipant[];
  event: Event;

  constructor(private route: ActivatedRoute) {
    this.event = this.route.snapshot.data['event'];
  }

  ngOnInit() {
    this.participants = [
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Participates'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Participates'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Participates'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Don\'t know'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Don\'t know'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Doesn\'t come'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Doesn\'t come'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
    ];
  }

}
