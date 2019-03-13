import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from '../../../../../shared/models/group';
import { GroupAdminPanelService } from '../../../../services/group-admin-panel.service';
import Swal from 'sweetalert2';
import { HttpService } from '../../../../http/http.service';
import { LoaderService } from '../../../../services/loader/service/loader.service';
import { MessageService } from '../../../../services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'group-settings',
  templateUrl: './group-settings.component.html'
})
export class GroupSettingsComponent implements OnInit {

  @Input()
  group: Group;
  form: FormGroup;
  name: FormControl;
  description: FormControl;
  nameValidSetted = true;

  constructor(private fb: FormBuilder,
              private router: Router,
              private adminPanelService: GroupAdminPanelService,
              private loaderService: LoaderService,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.name = new FormControl(this.group.name, Validators.required),
      description: this.description = new FormControl(this.group.description),
    });
  }

  public removeGroup(): void {
    Swal({
      title: this.messageService.LEAVE_GROUP,
      text: this.messageService.LEAVE_GROUP_TEXT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.close();
        this.httpService.deleteGroup(this.group.ref).subscribe();
        Swal(
          this.messageService.DELETED,
          this.messageService.GROUP_DELETED,
          'success'
        ).then((result) => {
          this.router.navigate(['/groups']);
        });
      }
    });
  }

  public leaveGroup(): void {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.YES
    }).then((result) => {
      if (result.value) {
        this.loaderService.displayLoadingPageModal();
        this.httpService.leaveGroup(this.group.ref).subscribe(() => {
          this.loaderService.closeLoadingPageModal();
          this.close();
          this.router.navigate(['/groups']);
        });

      }
    });
  }

  close(): void {
    $('#modalGroupSettings').modal('hide');
  }

  public updateInfo(): void {
    this.close();
    this.loaderService.displayLoadingPageModal();
    this.nameValidSetted = this.name.valid;
    this.group.name = this.name.value;
    this.form.value.description === '' ? this.group.description = null : this.group.description = this.form.value.description;
    const group = {
      ref: this.group.ref,
      name: this.group.name,
      description: this.group.description,
    };
    this.httpService.updateGroup(group).subscribe(() => {
      this.adminPanelService.updateGroup(group);
    });

  }

}
