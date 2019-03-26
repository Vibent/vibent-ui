import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AppSettings } from '../../../shared/global/constants';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

@Injectable()
export class LanguageService {

  constructor(@Inject(LOCALE_ID) public locale: string,
              private cookieService: CookieService) {
  }

  getLanguage() {
    return this.locale.substr(0, 2);
  }

  setLanguage(code: string): void {
    this.cookieService.set(AppSettings.LANGUAGE_HEADER, code, new Date(9999, 0, 26, 1), '/');
    window.location.reload(true);
  }

  formatDateToString(datePicker: string): string {
    let startDate: string;
    switch (this.getLanguage()) {
      case 'fr':
        startDate = moment(datePicker, 'DD/MM/YYYY HH:mm').toJSON();
        break;
      default:
        startDate = moment(datePicker).toJSON();
    }

    return startDate;
  }
}

