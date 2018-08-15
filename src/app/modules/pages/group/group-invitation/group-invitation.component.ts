import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

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
    this.httpService.getMe().subscribe((user) => {
      this.httpService.validateInviteToken({membershipRequests: {userRef: user.ref}}, this.route.snapshot.paramMap.get('token')).toPromise()
      .then(function () {
        Swal({
          type: 'success',
          title: 'Group joined',
          text: 'Lets go in!',
        }).then(() => {
          this.router.navigate(['/groups']); });
      })
      .catch(e => {
        Swal({
          type: 'error',
          title: 'Oops...',
          text: e.error.error.code,
        });
      });
    });

  }

}
