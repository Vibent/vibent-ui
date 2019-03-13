import { Component } from '@angular/core';
import { ScreenService } from './core/services/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public screenService: ScreenService) {
  }

}
