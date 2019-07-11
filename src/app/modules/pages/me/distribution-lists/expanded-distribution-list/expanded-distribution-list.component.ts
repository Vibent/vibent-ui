import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DistributionList } from '../../../../../shared/models/distribution-list';

@Component({
  selector: 'expanded-distribution-list',
  templateUrl: './expanded-distribution-list.component.html',
  styleUrls: ['./expanded-distribution-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedDistributionListComponent {

  @Input()
  distributionList: DistributionList;
  settingsOpen = false;

  constructor() {
  }

  offSettings() {
    this.settingsOpen = false;
  }

  onSettings() {
    this.settingsOpen = true;
  }

}
