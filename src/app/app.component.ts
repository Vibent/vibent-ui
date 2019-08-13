import {
  Component,
  OnInit
} from '@angular/core';
import { ScreenService } from './core/services/screen.service';
import { RoutingStateService } from './core/services/routing-state.service';
import { FirebaseMessagingService } from './core/services/firebase/firebase-messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public screenService: ScreenService,
              private firebaseMessagingService: FirebaseMessagingService,
              private routingState: RoutingStateService) {
    this.routingState.loadRouting();
  }

  ngOnInit() {
    const userId = 'userDev';
    this.firebaseMessagingService.requestPermission(userId);
    this.firebaseMessagingService.receiveMessage();
  }
}
