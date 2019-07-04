import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AdditionnalEventInfos } from '../../../../shared/models/additionnal-event-infos';
import { AdditionalEventInfoService } from '../../../../core/services/additional-event-info.service.';
import { Event } from '../../../../shared/models/event';

@Component({
  selector: 'event-preview',
  templateUrl: './event-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventPreviewComponent implements OnInit {

  @Input()
  public event: Event;
  public additionnalEventInfos: AdditionnalEventInfos;

  constructor(private additonalEventInfoService: AdditionalEventInfoService) {
  }

  ngOnInit(): void {
    this.additionnalEventInfos = this.additonalEventInfoService.getEventAdditionnalInfos(this.event);
  }

}
