import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public firstName: FormControl;
  public lastName: FormControl;
  public email: FormControl;
  public phone: FormControl;
  public password: FormControl;
  public passwordConfirmation: FormControl;

  public formsValidAfterRegister: any = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    password: true,
    passwordConfirmation: true,
    emailOrPhone: true,
};
  currentPhone: string;

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
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]);
    this.email = new FormControl('', [
      Validators.pattern('^[\\w\\-\\+]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}$')
    ]);
    this.phone = new FormControl('', [
      Validators.required,
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.passwordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
  }

  public getNumber(event): void  {
    this.currentPhone = event;
  }

  createForm() {
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    });
  }

  public checkLoginAndRegister(): void {
    this.formsValidAfterRegister = {
      firstName: this.firstName.valid,
      lastName: this.lastName.valid,
      email: this.email.valid,
      // TODO: find a good way to check phone validity
      phone: true,
      password: this.password.valid,
      passwordConfirmation: this.password.value === this.passwordConfirmation.value,
      emailOrPhone: ! (this.email.value === '' && !this.currentPhone)
    };

    this.formsValidAfterRegister.email = this.email.value !== '' ? this.email.valid : true;
    if (this.formsAllCorrects()) { const user = {
        email: this.email.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        password: this.password.value,
        phoneNumber: this.currentPhone
      };
      this.authenticationService.register(user, this.onFail.bind(this));
      Swal({
        type: 'success',
        title: Messages.REGISTER_CONFIRMATION,
        showConfirmButton: true,
      });
      this.router.navigate(['/login']);
    }
  }

  public formsAllCorrects(): boolean {
    let value = true;
    for (const key in this.formsValidAfterRegister) {
        value = value && this.formsValidAfterRegister[key];
    }
    return value;
  }

  public loginPage() {
    this.router.navigate(['/login']);
  }

  public onFail(e): void {
    Swal({
      type: 'error',
      title: 'Oops...',
      text: e.error.error.code,
    });
  }

}

