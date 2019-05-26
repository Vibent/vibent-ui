import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../../../../core/http/http.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../../../environments/environment';
import { MessageService } from '../../../../../../../core/services/i18n/message.service';

@Component({
  selector: 'add-event-participations',
  templateUrl: './add-event-participants.html',
  styleUrls: ['./add-event-participants-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEventParticipantsComponent implements OnInit {

  @Input()
  eventRef: string;
  // form: FormGroup;
  // email: FormControl;
  generatedLink: string;

  // emailValidSetted = true;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: this.email = new FormControl('', Validators.required),
    // });

    this.httpService.getStandaloneInviteToken(this.eventRef).subscribe((link) => {
      this.generatedLink = environment.appUrl + '/invite/' + link.token;
      this.cd.detectChanges();
    });
  }

  // public generateLink(): void {
  //   if (!this.generatedLink) {
  //     this.httpService.getStandaloneInviteToken(this.eventRef).subscribe((link) => {
  //       this.generatedLink = environment.appUrl + '/invite/' + link.token;
  //       this.cd.detectChanges();
  //     });
  //   }
  // }

  // public sendInvitation(): void {
  //   this.emailValidSetted = this.email.valid;
  //   if (this.emailValidSetted) {
  //     this.httpService.mailInvite({groupRef: this.eventRef, recipients: [this.email.value]}).subscribe(() => {
  //       this.email.reset();
  //       Swal({
  //         type: 'success',
  //         title: this.messageService.INVITATION_SENT,
  //         showConfirmButton: true,
  //       });
  //     }, () => {
  //       Swal({
  //         type: 'error',
  //         title: this.messageService.BAD_EMAIL,
  //         showConfirmButton: true,
  //       });
  //     });
  //   }
  // }
}
