import {
  ChangeDetectionStrategy,
  Component, Input,
} from '@angular/core';

import { DistributionList } from '../../../../../../shared/models/distribution-list';

@Component({
  selector: 'distribution-list-creation-summary',
  templateUrl: './distribution-list-creation-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionListCreationSummaryComponent {

  @Input()
  list: DistributionList;

  constructor() {
  }


}
