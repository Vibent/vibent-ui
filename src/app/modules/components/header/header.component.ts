import { Component } from '@angular/core';
import { VibentBaseComponent, VibentRoutes } from '../../../shared/components/base-component/base-component';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  extends VibentBaseComponent {

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected cookieService: CookieService) {
    super(route, router, cookieService);
  }

  onHowItWorks() {
    $('html, body').animate({ scrollTop: $('#home-explanations').offset().top }, 'slow');
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
