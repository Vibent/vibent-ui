import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../http/http.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '../../../services/i18n/message.service';
import { VibentRoutes } from '../../../../shared/components/base-component/base-component';

@Component({
  template: ''
})
export class MailConfirmationComponent implements OnInit {

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private router: Router,
              private route: ActivatedRoute,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.cookieService.deleteAll();
    this.httpService.confirmEmail(this.route.snapshot.paramMap.get('token')).subscribe(() => {
      this.loginPage();
      Swal({
        type: 'success',
        title: this.messageService.EMAIL_CONFIRMED,
        showConfirmButton: true,
      });
    }, () => {
      this.loginPage();
      Swal({
        type: 'error',
        title: this.messageService.EMAIL_UNCONFIRMED,
        showConfirmButton: true,
      });
    });

  }

  loginPage() {
    this.router.navigate([VibentRoutes.DEFAULT_URL]);
  }
}