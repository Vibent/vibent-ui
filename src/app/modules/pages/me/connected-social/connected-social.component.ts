import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { Provider } from '../../../../shared/models/provider';
import SOCIAL_PROVIDERS from '../../../../shared/global/social-providers';
import { AuthService } from 'angularx-social-login';
import Swal from 'sweetalert2';
import { UserManagementService } from '../../../../core/services/user-management.service';
import { MessageService } from '../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'connected-social',
  templateUrl: './connected-social.component.html',
  styleUrls: ['./connected-social.component.scss']
})
export class ConnectedSocialComponent implements OnInit {

  @Input()
  user: User;
  providers = SOCIAL_PROVIDERS;

  constructor(private socialAuthService: AuthService,
              private userService: UserManagementService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    $(() => {
      $('.tooltip-activation').tooltip();
    });
  }

  link(provider: Provider): void {
    this.socialAuthService.signIn(provider.id).then((user) => {
      this.userService.socialLink({
        idToken: user.idToken,
        authToken: user.authToken,
        provider: user.provider
      }, this.linkFail.bind(this));
      this.socialAuthService.signOut(true);
    });
  }

  unlink(provider: Provider): void {
    Swal({
      title: this.messageService.SOCIAL_ARE_YOU_SURE_UNLINK.replace('${name}', provider.label),
      text: this.messageService.SOCIAL_CAN_RELINK,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.YES
    }).then((result) => {
      if (result.value) {
        this.userService.socialUnlink({
          provider: provider.id
        }, this.unlinkFail.bind(this));
      }
    });
  }

  toggleLink(provider: Provider): void {
    if (this.isLinked(provider)) {
      this.unlink(provider);
    } else {
      this.link(provider);
    }
  }

  private isLinked(provider: Provider): boolean {
    return this.user.socialCredentials[provider.id];
  }

  public linkFail(e): void {
    Swal({
      type: 'error',
      title: this.messageService.OOPS,
      text: this.messageService.SOCIAL_LINK_FAIL,
    });
  }

  public unlinkFail(e): void {
    Swal({
      type: 'error',
      title: this.messageService.OOPS,
      text: this.messageService.SOCIAL_UNLINK_FAIL,
    });
  }
}
