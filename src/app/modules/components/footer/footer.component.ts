import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/i18n/language.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VibentBaseComponent, VibentRoutes } from '../../../shared/components/base-component/base-component';
import { CookieService } from 'ngx-cookie-service';
import { MenuComponent } from '../../../shared/components/menu-component/menu-component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends MenuComponent {

  date: Date = new Date();

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected cookieService: CookieService,
              private languageService: LanguageService) {
    super(route, router, cookieService);
  }

  changeLanguage(code: string) {
    this.languageService.setLanguage(code);
  }

}
