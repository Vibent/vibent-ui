import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from '../../services/routing-state.service';

@Component({
  selector: 'vibent-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,
              private routingState: RoutingStateService) {
  }

  back() {
    this.router.navigate([this.routingState.getPreviousRoute()]);
    this.routingState.unstackHistory();
  }
}