import { Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';

@Component({
  selector: 'app-expanded-free-bubble',
  templateUrl: './expanded-free-bubble.html'
})
export class ExpandedFreeBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor(protected userManagementService: UserManagementService) {
    super(userManagementService);
  }
}
