import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../../../../shared/models/user';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';
import { HttpService } from '../../../../../core/http/http.service';
import { Observable, Subscription } from 'rxjs';
import { DistributionList } from '../../../../../shared/models/distribution-list';
import { DistributionListsService } from '../../../../../core/services/distribution-lists/distribution-lists.service';

declare const $: any;

@Component({
  selector: 'distribution-list-section',
  templateUrl: './profile-distribution-lists-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDistributionListsSectionComponent implements OnInit, OnDestroy {

  @Input()
  user: User;
  @Output()
  listExpanded = new EventEmitter<DistributionList>();
  distributionLists: Observable<DistributionList[]>;
  subscriptions: Subscription[] = [];

  constructor(private modalManagerService: ModalManagerService,
              private distributionListService: DistributionListsService,
              private httpService: HttpService) {
  }


  ngOnInit() {
    $(() => {
      $('.add-distribution-list-disabled').tooltip();
    });
    this.modalManagerService.initHandleBackBrowser(VibentModals.DISTRIBUTION_LIST_CREATION);
    this.subscriptions.push(this.distributionListService.updated$.subscribe(() => {
      this.updateLists();
    }));
    this.updateLists();
  }

  updateLists() {
    this.distributionLists = this.httpService.getConnectedDistributionLists();
  }

  createDistributionList() {
    this.modalManagerService.showModal(VibentModals.DISTRIBUTION_LIST_CREATION);
  }

  openDistributionList(list: DistributionList) {
    this.modalManagerService.initHandleBackBrowser(VibentModals.EXPANDED_DISTRIBUTION_LIST);
    this.listExpanded.emit(list);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
