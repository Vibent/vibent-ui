import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedAlimentationBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor(protected userManagementService: UserManagementService) {
    super(userManagementService);
  }

}
