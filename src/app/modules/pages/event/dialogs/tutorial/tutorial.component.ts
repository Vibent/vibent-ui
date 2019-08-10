import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';
import { TutorialNavigationService, TutorialState } from '../../../../../core/services/tutorial-navigation.service';
import { CookieService } from 'ngx-cookie-service';

declare const $: any;

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent implements OnInit {

  TutorialState = TutorialState;

  constructor(private modalManagerService: ModalManagerService,
              private cd: ChangeDetectorRef,
              public navigation: TutorialNavigationService,
              private cookieService: CookieService) {
  }

  onNext() {
    this.cd.detectChanges();
  }

  onClose() {
    this.navigation.purge();
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    $(VibentModals.TUTORIAL).on('hidden.bs.modal', () => {
      this.onClose();
    });

    const lastLogin = this.cookieService.get('last-login');
    if (!lastLogin) {
      this.modalManagerService.showModal(VibentModals.TUTORIAL);
      this.cookieService.set('last-login', new Date().toISOString());
    }
  }

}
