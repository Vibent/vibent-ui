import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../http/http.service';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';
import { CookieService } from 'ngx-cookie-service';

@Component({
  template: ''
})
export class MailConfirmationComponent implements OnInit {

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cookieService.deleteAll();
    this.httpService.confirmEmail(this.route.snapshot.paramMap.get('token')).subscribe(() => {
      this.loginPage();
      Swal({
        type: 'success',
        title: Messages.EMAIL_CONFIRMED,
        showConfirmButton: true,
      });
    }, () => {
      this.loginPage();
      Swal({
        type: 'error',
        title: Messages.EMAIL_UNCONFIRMED,
        showConfirmButton: true,
      });
    });

  }

  loginPage() {
    this.router.navigate(['/login']);
  }
}