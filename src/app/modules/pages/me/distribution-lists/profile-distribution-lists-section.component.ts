import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { ModalManagerService, VibentModals } from '../../../../core/services/modal-manager.service';

declare const $: any;

@Component({
  selector: 'distribution-list-section',
  templateUrl: './profile-distribution-lists-section.component.html',
  styleUrls: ['./profile-distribution-lists-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDistributionListsSectionComponent implements OnInit {

  @Input()
  user: User;

  constructor(private modalManagerService: ModalManagerService) {
  }


  ngOnInit() {
    $(() => {
      $('.add-distribution-list-disabled').tooltip();
    });
    this.modalManagerService.initHandleBackBrowser(VibentModals.DISTRIBUTION_LIST_CREATION);
  }

  createDistributionList() {
    this.modalManagerService.showModal(VibentModals.DISTRIBUTION_LIST_CREATION);
  }
}
