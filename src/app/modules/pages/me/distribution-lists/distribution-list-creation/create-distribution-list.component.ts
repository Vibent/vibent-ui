import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  DistributionListsNavigationService,
  DistributionListState
} from '../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { DistributionList } from '../../../../../shared/models/distribution-list';
import { DistributionListsService } from '../../../../../core/services/distribution-lists/distribution-lists.service';

@Component({
  selector: 'create-distribution-list',
  templateUrl: './create-distribution-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDistributionListComponent {

  DistributionListState = DistributionListState;
  private createdList: DistributionList;

  constructor(public navigation: DistributionListsNavigationService,
              private distributionListsService: DistributionListsService,
              private cd: ChangeDetectorRef) {
  }

  onNext() {
    this.cd.detectChanges();
  }

  onListCreated(list: DistributionList) {
    this.createdList = list;
    this.navigation.setState(DistributionListState.SUMMARY);
    this.distributionListsService.updateUserLists();
    this.cd.detectChanges();
  }

  onClose() {
    this.navigation.purge();
    this.cd.detectChanges();
  }
}
