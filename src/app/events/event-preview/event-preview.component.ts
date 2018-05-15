import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Event} from '../../models/event';
import {AdditionalEventInfoService} from '../../services/additional-event-info.service.';
import {AdditionnalEventInfos} from '../../models/additionnal-event-infos';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnChanges {

  @Input()
  event: Event;
  additionnalEventInfos: AdditionnalEventInfos;
  ressourcesLoaded: Promise<boolean>;

  constructor(private additonalEventInfoService: AdditionalEventInfoService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const event: SimpleChange = changes.event;
    let promise: Promise<AdditionnalEventInfos>;
    promise = this.additonalEventInfoService.getAdditionnalInfos(this.event);
    promise.then((val) => {this.additionnalEventInfos = val;  this.ressourcesLoaded = Promise.resolve(true); });
  }

}
