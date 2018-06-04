import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {
    email: 'vibentMailNg@vibent.com',
    password: 'VibentPassNg'
  };

  constructor(private cookieService: CookieService,
              private authenticationService: AuthenticationService,
              private router: Router) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {
  }

  public login(): void {
    this.authenticationService.login({email: this.model.email, password: this.model.password}, this.onFail.bind(this));
  }

  public onFail(e): void {
    // TODO : add flash message or equivalent
    console.log('Error : ' + e.error.error.code);
  }
}
