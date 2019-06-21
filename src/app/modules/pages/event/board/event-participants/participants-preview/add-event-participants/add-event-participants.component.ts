import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  emails: FormArray;
  displayErrors = {};
  generatedLink: string;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      emails: this.emails = this.fb.array([this.createItem(), this.createItem(), this.createItem()]),
    });

    this.httpService.getStandaloneInviteToken(this.eventRef).subscribe((link) => {
      this.generatedLink = environment.appUrl + '/invite/e/' + link.token;
      this.cd.detectChanges();
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      email: new FormControl('', Validators.email),
    });
  }

  addItem(): void {
    this.emails.push(this.createItem());
  }

  removeItem(i: number): void {
    this.emails.removeAt(i);
  }

  public sendInvitation(): void {
    // Check for any invalid emails
    this.displayErrors = {};
    let foundError = false;
    for (let i = 0; i < this.emails.length; i++) {
      const control = this.emails.at(i);
      if (!control.pristine && control.invalid) {
        foundError = true;
        this.displayErrors[i] = true;
      }
    }
    if (foundError) {
      return;
    }

    // Check that at least one email is entered
    if (!this.emails.controls.find(e => e.value.email.length !== 0)) {
      Swal({
        type: 'error',
        title: this.messageService.MIN_ONE_EMAIL_REQUIRED,
        showConfirmButton: true,
      });
      return;
    }

    // Proceed with call to back
    const recipients = this.emails.getRawValue().map(v => v.email).filter(e => e.length !== 0);
    this.httpService.standaloneEventMailInvite({
      ref: this.eventRef,
      recipients: recipients
    }).subscribe(() => {
      this.emails.controls.forEach(c => c.reset());
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
