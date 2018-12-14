import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  PlanningBubble,
  PlanningDataModel,
  PlanningEntry
} from '../../../../../../../../../../shared/models/bubbles/PlanningBubble';
import { PlanningHttpService } from '../../../../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';
import { PlanningDataService } from '../../../../../../../../../../core/services/bubbles-services/planning/data/planning-data.service';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import Swal from 'sweetalert2';
import { Messages, SwalColors } from '../../../../../../../../../../shared/messages-codes/messages';

@Component({
  selector: '[planning-entry]',
  templateUrl: './planning-entry.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningEntryComponent implements OnInit {

  @Input()
  planningEntry: PlanningEntry;
  @Input()
  planningBubble: PlanningBubble;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedPlanningBubble = new EventEmitter<PlanningBubble>();
  planningDataModel: PlanningDataModel;
  isCurrentUserEntry = false;

  constructor(private planningHttpService: PlanningHttpService,
              private eventUpdateService: EventUpdateService,
              private planningDataService: PlanningDataService) {
  }

  ngOnInit(): void {
    this.constructPlanningDataModel();
  }

  constructPlanningDataModel() {
    this.planningDataModel = this.planningDataService.constructPlanningDataModel(this.planningEntry);
    this.isCurrentUserEntry = this.planningDataService.isCurrentUserEntry(this.planningEntry);
    console.log(this.isCurrentUserEntry);
  }

  deleteEntry() {
    Swal({
      title: Messages.ARE_YOU_SURE,
      text: Messages.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: SwalColors.CONFIRM_BUTTON,
      cancelButtonColor: SwalColors.CANCEL_BUTTON,
      confirmButtonText: Messages.DELETE
    }).then((result) => {
      if (result.value) {
        this.planningHttpService.deleteEntry(this.planningEntry).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef);
          this.planningBubble.entries
            .splice(this.planningBubble.entries
              .findIndex(entry => entry.id === this.planningEntry.id), 1);
          this.updatedPlanningBubble.emit(<PlanningBubble>this.planningBubble);
        });
      }
    });
  }
}
