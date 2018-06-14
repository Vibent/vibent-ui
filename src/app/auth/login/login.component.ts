import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;
  password: FormControl;

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
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  public login(): void {
    this.authenticationService.login({email: this.email, password: this.password}, this.onFail.bind(this));
  }

  public onFail(e): void {
    // TODO : add flash message or equivalent
    console.log('Error : ' + e.error.error.code);
  }
}
