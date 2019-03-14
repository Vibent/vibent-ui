import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../../../core/http/http.service';
import { Group } from '../../../../../../shared/models/group';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../../environments/environment';
import { MessageService } from '../../../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'add-group-members',
  templateUrl: './add-group-members.component.html'
})
export class AddGroupMembersComponent implements OnInit {

  @Input()
  group: Group;
  form: FormGroup;
  email: FormControl;
  generatedLink: string;

  emailValidSetted = true;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email = new FormControl('', Validators.required),
    });
  }

  public generateLink(): void {
    if (!this.generatedLink) {
      this.httpService.getInviteToken(this.group.ref).subscribe((link) => {
        this.generatedLink = environment.appUrl + '/invite/' + link.token;
      });
    }
  }

  public sendInvitation(): void {
    this.emailValidSetted = this.email.valid;
    if (this.emailValidSetted) {
      this.httpService.mailInvite({groupRef: this.group.ref, recipients: [this.email.value]}).subscribe(() => {
        this.email.reset();
        Swal({
          type: 'success',
          title: this.messageService.INVITATION_SENT,
          showConfirmButton: true,
        });
      }, () => {
        Swal({
          type: 'error',
          title: this.messageService.BAD_EMAIL,
          showConfirmButton: true,
        });
      });
    }
  }

  close() {
    $('#modalAddGroupMembers').modal('hide');
  }
}
