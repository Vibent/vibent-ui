import { Component } from '@angular/core';
import { ScreenService } from './core/services/screen.service';
import { RoutingStateService } from './core/services/routing-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public screenService: ScreenService,
              private routingState: RoutingStateService) {
    this.routingState.loadRouting();
  }

}
