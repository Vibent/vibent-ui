import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  DistributionListsNavigationService,
  DistributionListState
} from '../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { DistributionList } from '../../../../../shared/models/distribution-list';
import { DistributionListsService } from '../../../../../core/services/distribution-lists/distribution-lists.service';
import { VibentModals } from '../../../../../core/services/modal-manager.service';

declare var $: any;

@Component({
  selector: 'create-distribution-list',
  templateUrl: './create-distribution-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDistributionListComponent implements OnInit {

  DistributionListState = DistributionListState;
  private createdList: DistributionList;

  constructor(public navigation: DistributionListsNavigationService,
              private distributionListsService: DistributionListsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // Case modal is closed by back browser
    $(VibentModals.DISTRIBUTION_LIST_CREATION).on('hidden.bs.modal', () => {
      this.onClose();
    });
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
    this.navigation.setState(DistributionListState.EVENT_CHOICE);
    this.navigation.purge();
    this.cd.detectChanges();
  }
}
