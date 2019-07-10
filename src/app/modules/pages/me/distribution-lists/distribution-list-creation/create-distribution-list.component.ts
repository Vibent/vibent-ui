import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../shared/models/user';
import {
  DistributionListsService, IEventSimpleInformation
} from '../../../../../core/services/distribution-lists/distribution-lists.service';

@Component({
  selector: 'create-distribution-list',
  templateUrl: './create-distribution-list.component.html',
  styleUrls: ['./create-distribution-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDistributionListComponent implements OnInit {

  @Input()
  user: User;
  distributionListEventsInfos: IEventSimpleInformation[];

  constructor(private distributionListsService: DistributionListsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.distributionListsService.getUserEvents().then((data: IEventSimpleInformation[]) => {
      this.distributionListEventsInfos = data;
      this.cd.detectChanges();
    });
  }

}
