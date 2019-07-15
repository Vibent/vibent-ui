import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BubbleType } from '../../../shared/models/bubbles/IBubble';
import { VibentBaseComponent, VibentRoutes } from '../../../shared/components/base-component/base-component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends VibentBaseComponent {

  bubbleDisplayed: BubbleType = BubbleType.AlimentationBubble;
  BubbleType = BubbleType;

  constructor(protected router: Router,
              protected route: ActivatedRoute,
              protected cookieService: CookieService) {
    super(route, router, cookieService);
    if (this.cookieService.check('token')) {
      this.router.navigate([VibentRoutes.EVENTS_URL]);
    }
  }

  loginPage() {
    this.navigateToUrl(VibentRoutes.LOGIN_URL);
  }

}
