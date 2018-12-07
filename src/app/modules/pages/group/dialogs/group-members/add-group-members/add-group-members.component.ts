import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  emailValidSetted = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddGroupMembersComponent>,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.group = data.group;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email = new FormControl('', Validators.required),
    });
  }

  public generateLink(): void {
    this.httpService.getInviteToken(this.group.ref).subscribe((link) => {
      this.generatedLink = AppSettings.APP_URL + '/invite/' + link.token;
    });
  }

  public sendInvitation(): void {
    this.emailValidSetted = this.email.valid;
    if (this.emailValidSetted) {
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

  close() {
    this.dialogRef.close();
  }
}
