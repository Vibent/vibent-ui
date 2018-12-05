import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { FreeBubble } from '../../../../../../../../../shared/models/bubbles/FreeBubble';
import { User } from '../../../../../../../../../shared/models/user';
import { HttpService } from '../../../../../../../../../core/http/http.service';

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
