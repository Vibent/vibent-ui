import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AdditionnalEventInfos } from '../../../../shared/models/additionnal-event-infos';
import { AdditionalEventInfoService } from '../../../../core/services/additional-event-info.service.';
import { Event } from '../../../../shared/models/event';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html'
})
export class EventPreviewComponent implements OnChanges {

  @Input()
  public event: Event;
  public additionnalEventInfos: AdditionnalEventInfos;
  public ressourcesLoaded: Promise<boolean>;
  public opacityStyle: number;

  constructor(private additonalEventInfoService: AdditionalEventInfoService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const event: SimpleChange = changes.event;
    let promise: Promise<AdditionnalEventInfos>;
    if (new Date() < new Date(this.event.startDate)) {
      this.opacityStyle = 1;
    } else {
      this.opacityStyle = 0.5;
    }
    promise = this.additonalEventInfoService.getAdditionnalInfos(this.event);
    promise.then((val) => {
      this.additionnalEventInfos = val;
      this.ressourcesLoaded = Promise.resolve(true);
    });
  }

}
