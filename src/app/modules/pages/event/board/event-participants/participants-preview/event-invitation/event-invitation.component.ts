import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../../../core/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from '../../../../../../../core/services/i18n/message.service';
import { UserManagementService } from '../../../../../../../core/services/user-management.service';
import { User } from '../../../../../../../shared/models/user';

@Component({
  selector: 'event-invitation',
  templateUrl: './event-invitation.component.html',
})
export class EventInvitationComponent {

  user: User;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private userManagementService: UserManagementService,
              private router: Router,
              private messageService: MessageService) {
  }

  joinEvent(): void {
    this.user = this.userManagementService.getMe();
    this.httpService.validateEventInviteToken(
      {membershipRequests: {userRef: this.user.ref}}, this.route.snapshot.paramMap.get('token')).toPromise()
      .then(() => {
        Swal({
          type: 'success',
          title: this.messageService.EVENT_JOINED,
          text: this.messageService.EVENT_JOINED_TEXT,
        }).then(() => {
          this.router.navigate(['/events']);
        });
      })
      .catch(e => {
        Swal({
          type: 'error',
          title: this.messageService.OOPS,
          text: e.error.error.code,
        });
      });
  }

}
