import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  DistributionListsService,
  IEventSimpleInformation
} from '../../../../../../core/services/distribution-lists/distribution-lists.service';
import {
  DistributionListsNavigationService,
  DistributionListState
} from '../../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'distribution-list-creation-title',
  templateUrl: './distribution-list-creation-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionListCreationTitleComponent implements OnInit {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  title: FormControl;
  titleValidSetted = true;

  constructor(private distributionListsService: DistributionListsService,
              private navigation: DistributionListsNavigationService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: this.title = new FormControl(this.navigation.lastTitle, Validators.required),
    });
  }

  onNext() {
    this.titleValidSetted = this.title.valid;
    if (this.titleValidSetted) {
      this.navigation.lastTitle = this.title.value;
      this.navigation.setState(DistributionListState.DESCRIPTION);
      this.change.emit();
    }
  }

}
