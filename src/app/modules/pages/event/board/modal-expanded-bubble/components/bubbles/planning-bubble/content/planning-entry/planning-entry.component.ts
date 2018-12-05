import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { PlanningDataModel, PlanningEntry } from '../../../../../../../../../../shared/models/bubbles/PlanningBubble';
import { PlanningHttpService } from '../../../../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';
import { PlanningDataService } from '../../../../../../../../../../core/services/bubbles-services/planning/data/planning-data.service';

@Component({
  selector: '[planning-entry]',
  templateUrl: './planning-entry.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningEntryComponent implements OnInit {

  @Input()
  planningEntry: PlanningEntry;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedPlanningBubble = new EventEmitter<PlanningEntry>();
  planningDataModel: PlanningDataModel;

  constructor(private planningHttpService: PlanningHttpService,
              private planningDataService: PlanningDataService) {
  }

  ngOnInit(): void {
    this.constructPlanningDataModel();
  }

  constructPlanningDataModel() {
    this.planningDataModel = this.planningDataService.constructPlanningDataModel(this.planningEntry);
  }

}
