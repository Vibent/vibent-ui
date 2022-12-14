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
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

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
              private planningDataService: PlanningDataService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.constructPlanningDataModel();
  }

  constructPlanningDataModel() {
    this.planningDataModel = this.planningDataService.constructPlanningDataModel(this.planningEntry);
    this.isCurrentUserEntry = this.planningDataService.isCurrentUserEntry(this.planningEntry);
  }

  deleteEntry() {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.planningHttpService.deleteEntry(this.planningEntry).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.PlanningBubble});
          this.planningBubble.entries
            .splice(this.planningBubble.entries
              .findIndex(entry => entry.id === this.planningEntry.id), 1);
          this.updatedPlanningBubble.emit(<PlanningBubble>this.planningBubble);
        });
      }
    });
  }
}
