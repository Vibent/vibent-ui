import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingStateService } from '../../services/routing-state.service';
import { VibentBaseComponent } from '../../../shared/components/base-component/base-component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'vibent-header',
  templateUrl: './vibent-header.component.html',
  styleUrls: ['./vibent-header.component.scss']
})
export class VibentHeaderComponent extends VibentBaseComponent {

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected cookieService: CookieService,
              private routingState: RoutingStateService) {
    super(route, router, cookieService);
  }

  back() {
    this.navigateToUrl(this.routingState.getPreviousRoute());
    this.routingState.unstackHistory();
  }
}