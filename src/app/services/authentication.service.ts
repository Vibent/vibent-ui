import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import {HttpService} from '../http/http.service';
import {LoginRequest} from '../models/login-request';
import {LoginResponse} from '../models/login-response';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor(private httpService: HttpService,
                private cookieService: CookieService,
                private router: Router) {
    }

    login(loginRequest: LoginRequest) {
        const cookieService = this.cookieService;
        const router = this.router;
        this.httpService.login(loginRequest).toPromise().then(function (response: LoginResponse) {
            cookieService.set('token', response.token);
            router.navigate(['/']);
        });
    }

    logout() {
        this.cookieService.delete('token');
    }
}
