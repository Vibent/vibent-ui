import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { } from '@types/googlemaps';
import { EventParticipant } from '../../../../shared/models/event-participant';
import { Event } from '../../../../shared/models/event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

  public participants: EventParticipant[];
  public event: Event;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  constructor(private route: ActivatedRoute) {
    this.event = this.route.snapshot.data['event'];
  }

  ngOnInit() {
   /* const location = new google.maps.LatLng(45.750000, 4.850000);
    const mapProp = {
      center: location,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
    this.map.panTo(location);*/

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
