import { Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';

@Component({
  selector: 'app-expanded-travel-bubble',
  templateUrl: './expanded-travel-bubble.html'
})
export class ExpandedTravelBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor(protected userManagementService: UserManagementService) {
    super(userManagementService);
  }

}
