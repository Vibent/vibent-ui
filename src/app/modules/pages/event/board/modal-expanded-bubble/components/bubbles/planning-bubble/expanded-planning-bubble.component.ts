import { Component, OnInit } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';
import { UserManagementService } from '../../../../../../../../core/services/user-management.service';

@Component({
  selector: 'app-expanded-planning-bubble',
  templateUrl: './expanded-planning-bubble.html'
})
export class ExpandedPlanningBubbleComponent extends AbstractExpandedBubbleComponent implements OnInit {

  constructor(protected userManagementService: UserManagementService) {
    super(userManagementService);
  }
  ngOnInit() {
  }

}
