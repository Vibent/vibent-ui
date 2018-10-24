import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../../../../../core/http/http.service';
import { Group } from '../../../../../../shared/models/group';
import { AppSettings } from '../../../../../../shared/global/constants';
import Swal from 'sweetalert2';
import { Messages } from '../../../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-group-creation',
  templateUrl: './add-group-members.component.html'
})
export class AddGroupMembersComponent implements OnInit {

  group: Group;
  form: FormGroup;
  email: FormControl;
  generatedLink: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddGroupMembersComponent>,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.group = data.group;

    const dialogHeight = window.innerHeight <= 500 ? window.innerHeight - 50 + 'px' : '500px';
    dialogRef.updateSize('600px', dialogHeight);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email = new FormControl(),
    });
  }

  public generateLink(): void {
    this.httpService.getInviteToken(this.group.ref).subscribe((link) => {
      this.generatedLink = AppSettings.APP_URL + '/invite/' + link.token;
    });
  }

  public sendInvitation(): void {
    this.httpService.mailInvite({groupRef: this.group.ref, recipients: [this.email.value]}).subscribe(() => {
      this.email.reset();
      Swal({
        type: 'success',
        title: Messages.INVITATION_SENT,
        showConfirmButton: true,
      });
    }, () => {
      Swal({
        type: 'error',
        title: Messages.BAD_EMAIL,
        showConfirmButton: true,
      });
    });
  }
}
