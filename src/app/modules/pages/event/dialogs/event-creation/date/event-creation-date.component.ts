import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../../../../../core/services/i18n/language.service';
import {
  EventCreationNavigationService,
  EventCreationState
} from '../../../../../../core/services/event-creation-navigation.service';
import { HttpService } from '../../../../../../core/http/http.service';
import { Event } from '../../../../../../shared/models/event';
import { LoaderService } from '../../../../../../core/services/loader/service/loader.service';

declare const $: any;

@Component({
  selector: 'event-creation-date',
  templateUrl: './event-creation-date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationDateComponent implements OnInit {

  @Output()
  change = new EventEmitter();
  @Output()
  createdEvent = new EventEmitter<Event>();


  form: FormGroup;
  date: FormControl;
  dateValidSetted = true;

  constructor(public navigation: EventCreationNavigationService,
              private httpService: HttpService,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private loaderService: LoaderService,
              private languageService: LanguageService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      date: this.date = new FormControl(this.navigation.lastDate, Validators.required),
    });
    $('#event-datetime').datepicker({
      position: 'bottom left',
      language: this.languageService.getLanguage(),
      minDate: new Date(),
      timepicker: true
    });
  }

  onNext() {
    this.navigation.lastDate = $('#event-datetime').val();
    const event: Event = {
      title: this.navigation.lastTitle,
      description: this.navigation.lastDescription,
      startDate: this.languageService.formatDateToString(this.navigation.lastDate),
      groupRef: null,
    };

    this.loaderService.displayLoadingPageModal();
    this.httpService.createStandaloneEvent(event).subscribe((event) => {
      this.createdEvent.emit(event);
      this.dateValidSetted = true;
      this.loaderService.closeLoadingPageModal();
      this.navigation.setState(EventCreationState.PARTICIPANTS);
      this.change.emit();
    }, () => {
      this.dateValidSetted = false;
      this.loaderService.closeLoadingPageModal();
      this.cd.detectChanges();
    });
  }
}
