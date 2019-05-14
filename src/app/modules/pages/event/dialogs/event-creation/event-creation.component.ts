import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../../../core/http/http.service';
import { Event } from '../../../../../shared/models/event';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';
import { MessageService } from '../../../../../core/services/i18n/message.service';
import { LanguageService } from '../../../../../core/services/i18n/language.service';

declare const $: any;

@Component({
  selector: 'event-creation',
  templateUrl: './event-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationComponent implements OnInit {

  form: FormGroup;
  title: FormControl;
  description: FormControl;
  date: FormControl;

  titleValidSetted = true;
  dateValidSetted = true;

  constructor(private languageService: LanguageService,
              private fb: FormBuilder,
              private httpService: HttpService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    $('#event-datetime').datepicker({
      position: 'top left',
      language: this.languageService.getLanguage(),
      minDate: new Date(),
      timepicker: true
    });

    this.form = this.fb.group({
      title: this.title = new FormControl('', Validators.required),
      description: this.description = new FormControl(),
      date: this.date = new FormControl('', Validators.required)
    });
  }

  public saveEvent(): void {
    this.titleValidSetted = this.title.valid;
    this.dateValidSetted = this.date.valid;

    const event: Event = {
      title: this.form.value.title,
      description: this.form.value.description,
      startDate:  this.languageService.formatDateToString($('#event-datetime').val()),
      groupRef: null,
    };

    if (this.titleValidSetted) {
      this.loaderService.displayLoadingPageModal();
      this.httpService.createStandaloneEvent(event).subscribe(res => {
        this.loaderService.closeLoadingPageModal();
        this.router.navigate(['/events/' + res['ref']]);
        this.close();
        this.notificationService.notify(this.messageService.EVENT_CREATED, NotificationType.SUCCESS);
      }, () => {
        this.dateValidSetted = false;
        this.loaderService.closeLoadingPageModal();
      });
    }
  }

  close(): void {
    $('#modalEventCreation').modal('hide');
  }

}
