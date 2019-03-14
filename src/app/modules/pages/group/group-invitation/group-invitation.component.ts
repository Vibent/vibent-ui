import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from '../../../../core/services/i18n/message.service';

@Component({
  selector: 'app-group-invitation',
  templateUrl: './group-invitation.component.html',
})
export class GroupInvitationComponent implements OnInit {

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  joinGroup(): void {
    this.httpService.getMe().subscribe((user) => {
      this.httpService.validateInviteToken({membershipRequests: {userRef: user.ref}}, this.route.snapshot.paramMap.get('token')).toPromise()
        .then(() => {
          Swal({
            type: 'success',
            title: this.messageService.GROUP_JOINED,
            text: this.messageService.GROUP_JOINED_TEXT,
          }).then(() => {
            this.router.navigate(['/groups']);
          });
        })
        .catch(e => {
          Swal({
            type: 'error',
            title: this.messageService.OOPS,
            text: e.error.error.code,
          });
        });
    });

  }

}
