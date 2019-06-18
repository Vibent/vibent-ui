import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { HttpService } from '../../../core/http/http.service';
import { Membership } from '../../models/membership';
import { LoaderSize } from '../../global/constants';
import { Observable } from 'rxjs';

declare const $: any;
@Component({
  selector: 'user-profile-preview',
  templateUrl: './user-profile-preview.component.html',
  styleUrls: ['./user-profile-preview.scss']
})

export class UserProfilePreviewComponent implements OnInit {

  @Input()
  userRef: string;
  @Input()
  isEventCreator: boolean;
  @Input()
  membership: Membership;
  user$: Observable<User>;
  loaderSize = LoaderSize.small;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.user$ = this.httpService.getUser(this.userRef);
    $(() => {
      $('.event-creator').tooltip();
    });
  }
}
