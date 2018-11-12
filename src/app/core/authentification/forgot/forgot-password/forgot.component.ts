import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../http/http.service';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-login',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  phone: FormControl;
  currentPhone: string;

  constructor(private cookieService: CookieService,
              private httpService: HttpService,
              private authenticationService: AuthenticationService,
              private router: Router) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\\-\\+]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}$')
    ]);

    this.phone = new FormControl('', [
      Validators.required
    ]);
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      phone: this.phone,
    });
  }

  loginPage(): void {
    this.router.navigate(['/login']);
  }

  getNumber(event): void {
    this.currentPhone = event;
  }

  // TODO translate error code to message
  forgotByEmail(): void {
    this.httpService.requestPasswordResetEmail({email: this.email.value}).subscribe(
      () => {
        this.loginPage();
        Swal({
          type: 'success',
          title: Messages.PASSWORD_RESET_SENT,
          showConfirmButton: true,
        });
      },
      (e) => {
        Swal({
          type: 'error',
          title: e.error.error.code,
          showConfirmButton: true,
        });
      });
  }

  forgotByPhone(): void {
    // TODO
  }

}
