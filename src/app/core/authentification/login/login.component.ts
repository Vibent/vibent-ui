import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Messages } from '../../../shared/messages-codes/messages';
import { LoadingPageComponent } from '../../services/loader/loading-page/loading-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  passwordEmail: FormControl;

  phone: FormControl;
  passwordPhone: FormControl;
  currentPhone: string;
  currentpasswordPhoneValidator: boolean;

  returnUrl: string;

  constructor(private cookieService: CookieService,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private router: Router) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\\-\\+]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}$')
    ]);
    this.passwordEmail = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.phone = new FormControl('', [
      Validators.required
    ]);
    this.passwordPhone = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.passwordEmail,
      phone: this.phone,
      passwordPhone: this.passwordPhone,
    });
  }

  public hasError(event): void {
    this.currentpasswordPhoneValidator = event;
  }

  public getNumber(event): void {
    this.currentPhone = event;
  }

  public loginEmail(): void {
    this.authenticationService.emailLogin({
      email: this.email.value,
      password: this.passwordEmail.value
    }, this.returnUrl, this.onFail.bind(this));
  }

  public loginPhone(): void {
    this.authenticationService.phoneLogin({
      phone: this.currentPhone,
      password: this.passwordPhone.value
    }, this.returnUrl, this.onFail.bind(this));
  }

  public onFail(e): void {
    Swal({
      type: 'error',
      title: Messages.OOPS,
      text: Messages.BAD_LOGIN,
    });
  }

  public forgoPassword(): void {
    this.router.navigate(['/forgot']);
  }

  public register(): void {
    this.router.navigate(['/register']);
  }
}
