import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Messages } from '../../messages-codes/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  passwordEmail: FormControl;

  phone: FormControl;
  passwordPhone: FormControl;
  currentPhone: string;
  currentpasswordPhoneValidator: boolean;

  constructor(private cookieService: CookieService,
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

  public hasError(event): void  {
    this.currentpasswordPhoneValidator = event;
  }
  public getNumber(event): void  {
    this.currentPhone = event;
  }

  public loginEmail(): void {
    this.authenticationService.emailLogin({email: this.email.value, password: this.passwordEmail.value}, this.onFail.bind(this));
  }

  public loginPhone(): void {
    this.authenticationService.phoneLogin({phone: this.currentPhone, password: this.passwordPhone.value}, this.onFail.bind(this));
  }

  public onFail(e): void {
    Swal({
      type: 'error',
      title: 'Oops...',
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
