import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BubbleContributorsService } from '../../../../../core/services/bubbles-services/bubble-contributors.service.';
import { MostActiveUsers } from '../../../../../shared/models/most-active-users';

/**
 * Given a list of userRefs that have a certain activity and a max number
 * of items, displays a list of profile pictures in circular form and a
 * final circle displaying the number of non-displayed profile pictures
 * if there are any
 */
@Component({
  selector: 'bubble-contributors',
  templateUrl: './bubble-contributor-icons.component.html',
  styleUrls: ['./bubble-contributor-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BubbleContributorIconsComponent implements OnInit {
  @Input()
  userRefs: string[];
  @Input()
  maxItems: number;

  mostActiveUsers: MostActiveUsers;

  constructor(public bubbleContributorsService: BubbleContributorsService) {
  }

  ngOnInit() {
    this.mostActiveUsers = this.bubbleContributorsService.getMostActiveUsers(this.userRefs, this.maxItems);
  }


}
