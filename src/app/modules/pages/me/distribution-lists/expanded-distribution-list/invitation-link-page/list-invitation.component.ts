import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../../../shared/models/user';
import { HttpService } from '../../../../../../core/http/http.service';
import { UserManagementService } from '../../../../../../core/services/user-management.service';
import { MessageService } from '../../../../../../core/services/i18n/message.service';
import Swal from 'sweetalert2';
import { VibentRoutes } from '../../../../../../shared/components/base-component/base-component';

@Component({
  selector: 'list-invitation',
  templateUrl: './list-invitation.component.html',
})
export class ListInvitationComponent {

  user: User;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private userManagementService: UserManagementService,
              private router: Router,
              private messageService: MessageService) {
  }

  joinList(): void {
    this.user = this.userManagementService.getMe();
    this.httpService.validateListInviteToken(
      {membershipRequests: {userRef: this.user.ref}}, this.route.snapshot.paramMap.get('token')).toPromise()
      .then(() => {
        Swal({
          type: 'success',
          title: this.messageService.LIST_JOINED,
          text: this.messageService.LIST_JOINED_TEXT,
        }).then(() => {
          this.router.navigate([VibentRoutes.EVENTS_URL]);
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
