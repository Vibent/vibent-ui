import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  phone: FormControl;
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

  public createFormControls(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\\-\\+]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}$')
    ]);

    this.phone = new FormControl('', [
      Validators.required
    ]);
  }

  public createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      phone: this.phone,
    });
  }

  public loginPage(): void {
    this.router.navigate(['/login']);
  }

  public getNumber(event): void  {
    this.currentPhone = event;
  }

  public forgotByEmail(): void {
   // TODO
  }

  public forgotByPhone(): void {
    // TODO
  }

  public onFail(e): void {
    // TODO
  }
}
