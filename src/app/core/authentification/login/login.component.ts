import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MessageService } from '../../services/i18n/message.service';
import { VibentBaseComponent, VibentRoutes } from '../../../shared/components/base-component/base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends VibentBaseComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  passwordEmail: FormControl;

  passwordPhone: FormControl;
  currentpasswordPhoneValidator: boolean;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected cookieService: CookieService,
              private authenticationService: AuthenticationService,
              private messageService: MessageService) {
    super(route, router, cookieService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.createFormControls();
    this.createForm();
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
    this.passwordPhone = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.passwordEmail,
      passwordPhone: this.passwordPhone,
    });
  }

  public hasError(event): void {
    this.currentpasswordPhoneValidator = event;
  }

  public loginEmail(): void {
    this.authenticationService.emailLogin({
      email: this.email.value,
      password: this.passwordEmail.value
    }, this.returnUrl, this.onFail.bind(this));
  }

  public onFail(e): void {
    Swal({
      type: 'error',
      title: this.messageService.OOPS,
      text: this.messageService.BAD_LOGIN,
    });
  }

  public forgotPassword(): void {
    this.navigateToUrl(VibentRoutes.FORGOT_URL);
  }

  public register(): void {
    this.navigateToUrl(VibentRoutes.REGISTER_URL);
  }
}
