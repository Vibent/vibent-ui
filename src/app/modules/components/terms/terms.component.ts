import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from '../../../core/services/routing-state.service';

@Component({
  selector: 'terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {


  constructor(private router: Router,
              private routingState: RoutingStateService) {
  }

}
