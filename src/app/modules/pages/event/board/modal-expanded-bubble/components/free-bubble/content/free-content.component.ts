import { Component, Input, OnInit } from '@angular/core';
import { FreeBubble } from '../../../../../../../../shared/models/bubbles/FreeBubble';
import { HttpService } from '../../../../../../../../core/http/http.service';
import { User } from '../../../../../../../../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'free-content',
  templateUrl: './free-content.html'
})
export class FreeContentComponent implements OnInit {

  @Input()
  freeBubble: FreeBubble;
  @Input()
  eventRef: string;
  user: Observable<User>;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.user = this.httpService.getUser(this.freeBubble.creatorRef);
  }

}
