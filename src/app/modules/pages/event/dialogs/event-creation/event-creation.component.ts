import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { HttpService } from '../../../../../core/http/http.service';
import { Event } from '../../../../../shared/models/event';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { Messages } from '../../../../../shared/messages-codes/messages';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';

declare const $: any;

@Component({
  selector: 'event-creation',
  templateUrl: './event-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationComponent implements OnInit {

  @Input()
  groupRef: string;

  form: FormGroup;
  title: FormControl;
  description: FormControl;
  date: FormControl;

  titleValidSetted = true;
  dateValidSetted = true;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private notificationService: NotificationsService,
              private loaderService: LoaderService,
              private router: Router) {
  }

  ngOnInit() {
    $('#event-datetime').datepicker({
      position: 'top left',
      language: 'en',
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
      startDate:  moment($('#event-datetime').val()).toJSON(),
      groupRef: this.groupRef,
    };

    if (this.titleValidSetted) {
      this.loaderService.displayLoadingPageModal();
      this.httpService.createEvent(event).subscribe(res => {
        this.loaderService.closeLoadingPageModal();
        this.router.navigate(['/events/' + res['ref']]);
        this.close();
        this.notificationService.notify(Messages.EVENT_CREATED, NotificationType.SUCCESS);
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
