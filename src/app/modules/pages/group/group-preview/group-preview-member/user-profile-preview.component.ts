import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { Membership } from '../../../../../shared/models/membership';
import { LoaderSize } from '../../../../../shared/global/constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-profile-preview',
  templateUrl: './user-profile-preview.component.html',
  styleUrls: ['./user-profile-preview.scss']
})

export class UserProfilePreviewComponent implements OnInit {

  @Input()
  userRef: string;
  @Input()
  membership: Membership;
  user$: Observable<User>;
  loaderSize = LoaderSize.small;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.user$ = this.httpService.getUser(this.userRef);
  }
}
