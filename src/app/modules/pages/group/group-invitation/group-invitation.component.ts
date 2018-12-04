import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-group-invitation',
  templateUrl: './group-invitation.component.html',
})
export class GroupInvitationComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  joinGroup(): void {
    const self = this;
    this.httpService.getMe().subscribe((user) => {
      this.httpService.validateInviteToken({membershipRequests: {userRef: user.ref}}, this.route.snapshot.paramMap.get('token')).toPromise()
      .then(function () {
        Swal({
          type: 'success',
          title: Messages.GROUP_JOINED,
          text: Messages.GROUP_JOINED_TEXT,
        }).then(() => {
            self.router.navigate(['/groups']); });
      })
      .catch(e => {
        Swal({
          type: 'error',
          title:  Messages.OOPS,
          text: e.error.error.code,
        });
      });
    });

  }

}
