import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';
import { LoaderService } from '../../core/services/loader/service/loader.service';
import { VibentRoutes } from '../components/base-component/base-component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService,
              private router: Router,
              private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.addPendingRequest();
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.cookieService.get('token')
      }
    });

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loaderService.deletePendingRequest();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        // 401 Unauthorized responses - case when token is no more available
        if (err.status === 401) {
          this.router.navigate([VibentRoutes.LOGIN_URL]);
        }
      }
    }));
  }
}