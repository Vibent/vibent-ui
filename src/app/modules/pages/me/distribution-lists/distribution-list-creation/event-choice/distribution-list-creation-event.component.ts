import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  DistributionListsService,
  IEventSimpleInformation
} from '../../../../../../core/services/distribution-lists/distribution-lists.service';
import {
  DistributionListsNavigationService,
  DistributionListState
} from '../../../../../../core/services/distribution-lists/distribution-lists-navigation.service';

@Component({
  selector: 'distribution-list-creation-event',
  templateUrl: './distribution-list-creation-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionListCreationEventComponent implements OnInit {

  @Output()
  change = new EventEmitter();
  distributionListEventsInfos: IEventSimpleInformation[];
  selectEventRef: string;
  SELECT_ID = 'select-event';

  constructor(private distributionListsService: DistributionListsService,
              private navigation: DistributionListsNavigationService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.distributionListsService.getUserEvents().then((data: IEventSimpleInformation[]) => {
      this.distributionListEventsInfos = data;
      // detect change to build select
      this.cd.detectChanges();
      // First event is selected by default
      const select = document.getElementById(this.SELECT_ID) as HTMLSelectElement;
      this.selectEventRef = this.navigation.lastEvent ? this.navigation.lastEvent : select.options[0].id;
      // detect change to select correct option
      this.cd.detectChanges();
    });
  }

  eventPick(select) {
    this.selectEventRef = select.options[select.selectedIndex].id;
  }

  onNext() {
    this.navigation.lastEvent = this.selectEventRef;
    this.navigation.setState(DistributionListState.TITLE);
    this.change.emit();
  }

}
