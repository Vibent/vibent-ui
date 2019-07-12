import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../../../../core/http/http.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../../../environments/environment';
import { MessageService } from '../../../../../../../core/services/i18n/message.service';
import { DistributionList } from '../../../../../../../shared/models/distribution-list';

@Component({
  selector: 'add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * This component is shared between event and list invitation
 * @Input()
 * eventRef
 * @Input()
 * distributionList:
 *
 * Input determines the use case.
 * We allow ourselves to manage these two use cases in the same component because it only responds to two simple cases.
 * A division into several components should be considered in case of more cases
 *
 */
export class AddPeopleComponent implements OnInit {

  // Determining the use case
  @Input()
  eventRef: string;
  @Input()
  distributionList: DistributionList;

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

    if (this.eventRef) {
      this.initEventInviteToken();
    } else if (this.distributionList) {
      this.initListInviteToken();
    }
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

  /**
   * Send Invitations
   */
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
      this.errorSwal(this.messageService.MIN_ONE_EMAIL_REQUIRED);
      return;
    }

    // Proceed with call to back
    const recipients = this.emails.getRawValue().map(v => v.email).filter(e => e.length !== 0);
    if (this.eventRef) {
      this.sendEventEmails(recipients);
    } else if (this.distributionList) {
      this.sendListEmails(recipients);
    }
  }

  sendEventEmails(recipients) {
    this.httpService.eventMailInvite({
      ref: this.eventRef,
      recipients: recipients
    }).subscribe(() => {
      this.emails.controls.forEach(c => c.reset());
      this.successSwal(this.messageService.INVITATION_SENT);
    }, () => {
      this.errorSwal(this.messageService.BAD_EMAIL);
    });
  }

  sendListEmails(recipients) {
    this.httpService.listMailInvite({
      id: this.distributionList.id,
      recipients: recipients
    }).subscribe(() => {
      this.emails.controls.forEach(c => c.reset());
      this.successSwal(this.messageService.INVITATION_SENT);
    }, () => {
      this.errorSwal(this.messageService.BAD_EMAIL);
    });
  }

  /**
   * Invitation link generation
   */
  initEventInviteToken() {
    this.httpService.getEventInviteToken(this.eventRef).subscribe((link) => {
      this.generatedLink = environment.appUrl + '/invite/e/' + link.token;
      this.cd.detectChanges();
    });
  }

  initListInviteToken() {
    this.httpService.getListInviteToken(this.distributionList.id).subscribe((link) => {
      this.generatedLink = environment.appUrl + '/invite/l/' + link.token;
      this.cd.detectChanges();
    });
  }

  /**
   * Swal errors
   */
  successSwal(message: string) {
    Swal({
      type: 'success',
      title: message,
      showConfirmButton: true,
    });
  }

  errorSwal(message: string) {
    Swal({
      type: 'error',
      title: message,
      showConfirmButton: true,
    });
  }

}
