import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from '../../../../http/http.service';
import { Event } from '../../../../../shared/models/event';
import * as moment from 'moment';
import { EventUpdateService } from '../../../../services/bubbles-services/event-update.service';
import { LoaderService } from '../../../../services/loader/service/loader.service';
import { MessageService } from '../../../../services/i18n/message.service';
import { LanguageService } from '../../../../services/i18n/language.service';
import { ModalManagerService, VibentModals } from '../../../../services/modal-manager.service';
import { UserManagementService } from '../../../../services/user-management.service';

declare const $: any;

@Component({
  selector: 'event-settings',
  templateUrl: './event-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventSettingsComponent implements OnInit {

  @Input()
  event: Event;
  form: FormGroup;
  title: FormControl;
  description: FormControl;
  date: FormControl;

  titleValidSetted = true;
  dateValidSetted = true;

  constructor(private fb: FormBuilder,
              private loaderService: LoaderService,
              private eventUpdateService: EventUpdateService,
              private languageService: LanguageService,
              private userManagementService: UserManagementService,
              private router: Router,
              private modalManagerService: ModalManagerService,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    $('#event-date').datepicker({
      position: 'top left',
      language: this.languageService.getLanguage(),
      minDate: new Date(),
      timepicker: true
    });
    this.form = this.fb.group({
      title: this.title = new FormControl(this.event.title, Validators.required),
      description: this.description = new FormControl(this.event.description),
      date: this.date = new FormControl(moment(this.event.startDate).format('DD-MM-YYYY HH:mm'), Validators.required),
    });
  }

  public deleteEvent(): void {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.close();
        this.httpService.deleteEvent(this.event.ref).subscribe(() => {
          this.userManagementService.setMe();
        });
        Swal(
          this.messageService.DELETED,
          this.messageService.EVENT_DELETED,
          'success'
        ).then(() => {
          this.router.navigate(['/events']);
        });
      }
    });
  }

  close(): void {
    this.modalManagerService.hideModal(VibentModals.EVENT_SETTINGS);
  }

  public updateInfo(): void {
    this.close();
    this.loaderService.displayLoadingPageModal();
    this.dateValidSetted = true;
    this.titleValidSetted = this.title.valid;
    this.event.title = this.title.value;
    this.description.value === '' ? this.event.description = null : this.event.description = this.description.value;
    const event = {
      title: this.event.title,
      ref: this.event.ref,
      startDate: this.languageService.formatDateToString($('#event-date').val()),
      description: this.event.description,
    };
    this.httpService.updateEvent(event).subscribe(() => {}, () => {
      this.dateValidSetted = false;
    });

  }

}
