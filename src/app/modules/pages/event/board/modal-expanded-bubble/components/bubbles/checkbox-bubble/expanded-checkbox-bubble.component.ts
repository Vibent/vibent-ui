import { Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';

@Component({
  selector: 'app-expanded-checkbox-bubble',
  templateUrl: './expanded-checkbox-bubble.html'
})
export class ExpandedCheckboxBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor(protected userManagementService: UserManagementService) {
    super(userManagementService);
  }

}
