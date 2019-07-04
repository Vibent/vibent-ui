import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MessageService } from '../../../services/i18n/message.service';
import { VibentBaseComponent, VibentRoutes } from '../../../../shared/components/base-component/base-component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends VibentBaseComponent implements OnInit {

  registerForm: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  password: FormControl;
  passwordConfirmation: FormControl;

  formsValidAfterRegister: any = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    password: true,
    passwordConfirmation: true,
    emailOrPhone: true,
  };
  currentPhone: string;

  constructor(protected cookieService: CookieService,
              protected route: ActivatedRoute,
              protected router: Router,
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

  getNumber(event): void  {
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

  checkLoginAndRegister(): void {
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
        title: this.messageService.REGISTER_CONFIRMATION,
        showConfirmButton: true,
      });
      this.loginPage();
    }
  }

  formsAllCorrects(): boolean {
    let value = true;
    for (const key in this.formsValidAfterRegister) {
        value = value && this.formsValidAfterRegister[key];
    }
    return value;
  }

  loginPage() {
    this.navigateToUrl(VibentRoutes.LOGIN_URL);
  }

  aboutPage() {
    this.navigateToUrl(VibentRoutes.TERMS_URL);
  }

  onFail(e): void {
    Swal({
      type: 'error',
      title:  this.messageService.OOPS,
      text: e.error.error.code,
    });
  }

}

