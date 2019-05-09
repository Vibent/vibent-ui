import {
  Component, EventEmitter, Input,
  OnInit, Output
} from '@angular/core';
import { User } from '../../../../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxHttpService } from '../../../../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import { CheckboxBubble } from '../../../../../../../../../../shared/models/bubbles/CheckboxBubble';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { AbstractBubbleEntityCreationComponent } from '../../../../abstract/abstract-bubble-entity-creation.component';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: '[option-creation]',
  templateUrl: './option-creation.html'
})
export class OptionCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {
  @Input()
  eventRef: string;
  @Input()
  bubbleId: number;
  @Output()
  updatedCheckboxBubble = new EventEmitter<CheckboxBubble>();
  user: User;
  form: FormGroup;
  optionContent: FormControl;

  constructor(private userManagementService: UserManagementService,
              private checkboxHttpService: CheckboxHttpService,
              private eventUpdateService: EventUpdateService) {
    super();
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      optionContent: this.optionContent = new FormControl(),
    });
  }

  createOption() {
    this.checkboxHttpService.createOption({
      bubbleId: this.bubbleId,
      content: this.optionContent.value
    }).subscribe((updatedBubble) => {
      this.updatedCheckboxBubble.emit(<CheckboxBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.CheckboxBubble});
      this.toggleCreationCard();
    });
  }


}
