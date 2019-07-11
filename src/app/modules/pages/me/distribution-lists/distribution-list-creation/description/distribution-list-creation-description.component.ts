import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DistributionListsService } from '../../../../../../core/services/distribution-lists/distribution-lists.service';
import { DistributionListsNavigationService } from '../../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../../../../../core/http/http.service';
import { LoaderService } from '../../../../../../core/services/loader/service/loader.service';
import { DistributionList } from '../../../../../../shared/models/distribution-list';

@Component({
  selector: 'distribution-list-creation-description',
  templateUrl: './distribution-list-creation-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionListCreationDescriptionComponent implements OnInit {

  @Output()
  createdDitributionList = new EventEmitter<DistributionList>();
  form: FormGroup;
  description: FormControl;

  constructor(private httpService: HttpService,
              private loaderService: LoaderService,
              private navigation: DistributionListsNavigationService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: this.description = new FormControl(this.navigation.lastDescription),
    });
  }

  onNext() {
    this.navigation.lastDescription = this.description.value;
    this.loaderService.displayLoadingPageModal();
    this.httpService.createDistributionList({
      eventRef: this.navigation.lastEvent,
      title: this.navigation.lastTitle,
      description: this.navigation.lastDescription
    }).subscribe((createdList: DistributionList) => {
      this.createdDitributionList.emit(createdList);
      this.loaderService.closeLoadingPageModal();
    }, () => {
      this.loaderService.closeLoadingPageModal();
    });
  }
}