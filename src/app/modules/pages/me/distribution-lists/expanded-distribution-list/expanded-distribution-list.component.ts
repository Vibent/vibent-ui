import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DistributionListsNavigationService } from '../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { DistributionList } from '../../../../../shared/models/distribution-list';

@Component({
  selector: 'expanded-distribution-list',
  templateUrl: './expanded-distribution-list.component.html',
  styleUrls: ['./expanded-distribution-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedDistributionListComponent implements OnInit {

  @Input()
  distributionList: DistributionList;

  constructor(private navigation: DistributionListsNavigationService) {
  }

  ngOnInit() {
  }

}
