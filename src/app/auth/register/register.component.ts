import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: any = {
    password: 'VibentPassNg',
    email: 'vibentMailNg@vibent.com',
    birthday: '1995-05-21T14:39:50.369Z',
    firstName: 'John',
    lastName: 'Kras'
  };

  // TODO verify passwords
  public passwordConfirm: string;

  constructor(private cookieService: CookieService,
              private authenticationService: AuthenticationService,
              private router: Router) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {
  }

  public register(): void {
    this.authenticationService.register(this.model, this.onFail.bind(this));
  }

  public onFail(e): void {
    // TODO : add flash message or equivalent
    console.log('Error : ' + e.error.error.code);
  }

}

