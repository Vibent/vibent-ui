import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DistributionList } from '../../../../../shared/models/distribution-list';
import { VibentModals } from '../../../../../core/services/modal-manager.service';
import { User } from '../../../../../shared/models/user';
declare const $: any;

@Component({
  selector: 'expanded-distribution-list',
  templateUrl: './expanded-distribution-list.component.html',
  styleUrls: ['./expanded-distribution-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedDistributionListComponent implements OnInit {

  @Input()
  user: User;
  @Input()
  distributionList: DistributionList;
  settingsOpen = false;
  inviteOpen = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    // Case modal is closed by back browser
    $(VibentModals.EXPANDED_DISTRIBUTION_LIST).on('hidden.bs.modal', () => {
      this.setPrimaryPage();
    });
  }

  offSettings() {
    this.settingsOpen = false;
    this.cd.detectChanges();
  }

  onSettings() {
    this.settingsOpen = true;
    this.cd.detectChanges();
  }

  onInvite() {
    this.inviteOpen = true;
    this.cd.detectChanges();
  }

  offInvite() {
    this.inviteOpen = false;
    this.cd.detectChanges();
  }

  isPrimaryPage() {
    return !this.inviteOpen && !this.settingsOpen;
  }

  setPrimaryPage() {
    this.offSettings();
    this.offInvite();
  }

}
