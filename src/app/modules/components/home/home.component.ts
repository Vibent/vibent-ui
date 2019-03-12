import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BubbleType } from '../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  returnUrl: string;
  date: Date = new Date();
  bubbleDisplayed: BubbleType = BubbleType.AlimentationBubble;
  BubbleType = BubbleType;

  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }

  loginPage() {
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl }});
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/events';
  }


}
