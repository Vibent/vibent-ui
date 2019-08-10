import { Component } from '@angular/core';
import { VibentRoutes } from '../../../shared/components/base-component/base-component';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuComponent } from '../../../shared/components/menu-component/menu-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends MenuComponent {

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected cookieService: CookieService) {
    super(route, router, cookieService);
  }

  onHowItWorks() {
    document.getElementById('home-explanations').scrollIntoView({ behavior: 'smooth' });
  }

  onAboutUs() {
    this.navigateToUrl(VibentRoutes.ABOUT_URL);
  }

  onTerms() {
    this.navigateToUrl(VibentRoutes.TERMS_URL);
  }

  onGetApp() {
    this.navigateToUrl(VibentRoutes.GET_APP);
  }
}
