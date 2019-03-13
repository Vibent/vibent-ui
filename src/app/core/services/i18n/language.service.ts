import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AppSettings } from '../../../shared/global/constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LanguageService {

  constructor(@Inject(LOCALE_ID) public locale: string,
              private cookieService: CookieService) {
  }

  public getLanguage() {
    return this.locale.substr(0, 2);
  }

  public setLanguage(code: string): void {
    this.cookieService.set(AppSettings.LANGUAGE_HEADER, code, new Date(9999, 0, 26, 1), '/');
    window.location.reload(true);
  }
}

