import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from '../../../../../shared/models/group';
import { GroupAdminPanelService } from '../../../../services/group-admin-panel.service';
import Swal from 'sweetalert2';
import { HttpService } from '../../../../http/http.service';
import { LoaderService } from '../../../../services/loader/service/loader.service';
import { Messages, SwalColors } from '../../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html'
})
export class GroupSettingsComponent implements OnInit {

  group: Group;
  form: FormGroup;
  name: FormControl;
  description: FormControl;
  nameValidSetted = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupSettingsComponent>,
              private router: Router,
              private adminPanelService: GroupAdminPanelService,
              private loaderService: LoaderService,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.group = data.group;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.name = new FormControl(this.group.name, Validators.required),
      description: this.description = new FormControl(this.group.description),
    });
  }

  public removeGroup(): void {
    Swal({
      title: Messages.ARE_YOU_SURE,
      text: Messages.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: SwalColors.CONFIRM_BUTTON,
      reverseButtons: true,
      cancelButtonColor: SwalColors.CANCEL_BUTTON,
      confirmButtonText: Messages.DELETE
    }).then((result) => {
      if (result.value) {
        this.dialogRef.close();
        this.httpService.deleteGroup(this.group.ref).subscribe();
        Swal(
          Messages.DELETED,
          Messages.GROUP_DELETED,
          'success'
        ).then((result) => {
          this.router.navigate(['/groups']);
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
