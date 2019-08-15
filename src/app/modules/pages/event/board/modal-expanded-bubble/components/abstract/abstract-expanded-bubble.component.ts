import { Input } from '@angular/core';
import { IBubble } from '../../../../../../../shared/models/bubbles/IBubble';
import { UserManagementService } from '../../../../../../../core/services/user-management.service';
import { User } from '../../../../../../../shared/models/user';

/**
 * Abstract component for expanded bubbles
 */
export abstract class AbstractExpandedBubbleComponent {

  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;
  user: User;
  contentDisplayed = true;

  constructor(protected userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  openBubbleSettings() {
    this.contentDisplayed = false;
  }

  onBackToContentSent() {
    this.contentDisplayed = true;
  }

  onBubbleUpdate(updatedBubble: IBubble) {
    this.bubble = updatedBubble;
  }

}
