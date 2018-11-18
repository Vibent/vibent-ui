import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from '../../../../http/http.service';
import { Event } from '../../../../../shared/models/event';
import { EventAdminPanelService } from '../../../../services/event-admin-panel.service';
import * as moment from 'moment';
import { Messages } from '../../../../../shared/messages-codes/messages';
import { EventUpdateService } from '../../../../services/bubbles-services/event-update.service';
import { LoaderService } from '../../../../services/loader/service/loader.service';

declare const $: any;

@Component({
  selector: 'event-settings',
  templateUrl: './event-settings.component.html'
})

export class EventSettingsComponent implements OnInit {

  event: Event;
  form: FormGroup;
  title: FormControl;
  description: FormControl;
  date: FormControl;

  titleValidSetted = true;
  dateValidSetted = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventSettingsComponent>,
              private loaderService: LoaderService,
              private eventUpdateService: EventUpdateService,
              private router: Router,
              private adminPanelService: EventAdminPanelService,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.event = data.event;
  }

  ngOnInit() {
    $('#event-date').datepicker({
      position: 'top left',
      language: 'en',
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
      title: Messages.ARE_YOU_SURE,
      text: Messages.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      reverseButtons: true,
      cancelButtonColor: '#d33',
      confirmButtonText: Messages.DELETE
    }).then((result) => {
      if (result.value) {
        this.dialogRef.close();
        this.httpService.deleteEvent(this.event.ref).subscribe();
        Swal(
          Messages.DELETED,
          Messages.EVENT_DELETED,
          'success'
        ).then((result) => {
          this.router.navigate(['/events']);
        });
      }
    });
  }

  public close(): void {
    this.dialogRef.close();
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
      startDate: moment($('#event-date').val()).toJSON(),
      description: this.event.description,
    };
    this.httpService.updateEvent(event).subscribe(() => {
      this.adminPanelService.updateEvent(event);
    }, () => {
      this.dateValidSetted = false;
    });

  }

}
