import { Injectable } from '@angular/core';

declare var $: any;

export enum VibentModals {
  EVENT_CREATION = '#modalEventCreation',
  SELECT_BUBBLE_TYPE = '#modalSelectBubbleType',
  EXPANDED_BUBBLE = '#expandedBubble',
  PROFILE_SETTINGS = '#modalProfileSettings',
  EVENT_PARTICIPANTS = '#modalEventParticipants',
  EVENT_SETTINGS = '#modalEventSettings',
  TUTORIAL = '#modalTutorial',
  DISTRIBUTION_LIST_CREATION = '#modalDistributionListCreation',
  EXPANDED_DISTRIBUTION_LIST = '#modalExpandedDistributionList',
}

@Injectable()
export class ModalManagerService {

  constructor() {
  }

  initHandleBackBrowser(...modalIds: VibentModals[]) {
    for (const modalId of modalIds) {
      $(modalId).on('show.bs.modal', () => {
        window.location.hash = 'modal';
      });

      $(modalId).on('hidden.bs.modal', () => {
        window.location.hash = '';
      });

      $(window).on('hashchange', () => {
        if (window.location.hash !== '#modal') {
          this.hideModal(modalId);
        }
      });
    }
  }

  showModal(modalId: VibentModals) {
    $(modalId).modal('show');
  }

  hideModal(modalId: VibentModals) {
    $(modalId).modal('hide');
  }
}
