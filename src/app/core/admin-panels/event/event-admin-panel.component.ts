import { Component, OnInit } from '@angular/core';
import { ModalManagerService, VibentModals } from '../../services/modal-manager.service';

@Component({
  selector: 'event-admin-panel',
  templateUrl: './event-admin-panel.component.html',
})
export class EventAdminPanelComponent implements OnInit {

  constructor(private modalManagerService: ModalManagerService) {
  }

  ngOnInit() {
    this.modalManagerService.initHandleBackBrowser(VibentModals.EVENT_SETTINGS);
  }

  openSettingsModal() {
    this.modalManagerService.showModal(VibentModals.EVENT_SETTINGS);
  }

}
