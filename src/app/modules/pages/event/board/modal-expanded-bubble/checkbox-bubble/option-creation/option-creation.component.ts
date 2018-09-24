import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input,
  OnInit, Output
} from '@angular/core';
import { User } from '../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../core/services/user-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlimentationBubble, AlimType } from '../../../../../../../shared/models/bubbles/AlimentationBubble';
import { CheckboxHttpService } from '../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import { CheckboxBubble } from '../../../../../../../shared/models/bubbles/CheckboxBubble';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';

@Component({
  selector: '[option-creation]',
  templateUrl: './option-creation.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionCreationComponent implements OnInit {
  @Input()
  toggle: boolean;
  @Input()
  eventRef: string;
  @Input()
  bubbleId: number;
  user: User;

  @Output()
  updatedCheckboxBubble = new EventEmitter<CheckboxBubble>();

  form: FormGroup;
  optionContent: FormControl;

  constructor(private userManagementService: UserManagementService,
              private checkboxHttpService: CheckboxHttpService,
              private eventUpdateService: EventUpdateService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      optionContent: this.optionContent = new FormControl(),
    });
  }

  closeCreationCard() {
    this.toggle = false;
  }

  createOption() {
    this.checkboxHttpService.createOption({
      bubbleId: this.bubbleId,
      content: this.optionContent.value
    }).subscribe((updatedBubble) => {
      this.updatedCheckboxBubble.emit(<AlimentationBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef);
      this.closeCreationCard();
    });
  }


}
