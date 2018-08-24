import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TravelBubble } from '../../../../../../shared/models/bubbles/TravelBubble';
import { } from '@types/googlemaps';

declare const $: any;

@Component({
  selector: 'app-expanded-travel-bubble',
  templateUrl: './expanded-travel-bubble.html'
})
export class ExpandedTravelBubbleComponent implements OnInit {

  @Input()
  public travelBubble: TravelBubble;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  ngOnInit() {
    const location = new google.maps.LatLng(45.750000, 4.850000);
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
    this.map.panTo(location);

  }
}
