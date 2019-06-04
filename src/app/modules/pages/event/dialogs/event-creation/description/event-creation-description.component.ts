import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  EventCreationNavigationService,
  EventCreationState
} from '../../../../../../core/services/event-creation-navigation.service';

@Component({
  selector: 'event-creation-description',
  templateUrl: './event-creation-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationDescriptionComponent implements OnInit {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  description: FormControl;

  constructor(public navigation: EventCreationNavigationService,
              private cd: ChangeDetectorRef,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: this.description = new FormControl(this.navigation.lastDescription),
    });
  }

  onNext() {
    this.navigation.lastDescription = this.description.value;
    this.navigation.setState(EventCreationState.DATE);
    this.change.emit();
  }

}
