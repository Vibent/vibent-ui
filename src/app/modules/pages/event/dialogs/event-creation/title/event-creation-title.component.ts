import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  EventCreationNavigationService,
  EventCreationState
} from '../../../../../../core/services/event-creation-navigation.service';

@Component({
  selector: 'event-creation-title',
  templateUrl: './event-creation-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationTitleComponent implements OnInit {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  title: FormControl;
  titleValidSetted = true;

  constructor(public navigation: EventCreationNavigationService,
              private cd: ChangeDetectorRef,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: this.title = new FormControl(this.navigation.lastTitle, Validators.required),
    });
    this.navigation.titleStateOnClose.subscribe(() => {
      this.title.reset();
    });
  }

  onNext() {
    this.titleValidSetted = this.title.valid;
    if (this.titleValidSetted) {
      this.navigation.lastTitle = this.title.value;
      this.navigation.setState(EventCreationState.DESCRIPTION);
      this.change.emit();
    }
  }

}
