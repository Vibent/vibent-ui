import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { DistributionListsService, } from '../../../../../../core/services/distribution-lists/distribution-lists.service';
import { DistributionList } from '../../../../../../shared/models/distribution-list';

@Component({
  selector: 'distribution-list-invitation',
  templateUrl: './distribution-list-invitation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionListInvitationComponent implements OnInit {

  @Input()
  list: DistributionList;
  @Output()
  closeInvitation = new EventEmitter();

  constructor(private distributionListsService: DistributionListsService) {
  }

  ngOnInit() {
  }

}
