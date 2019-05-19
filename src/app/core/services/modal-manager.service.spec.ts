import { ModalManagerService, VibentModals } from './modal-manager.service';

describe('Modal manager Service', () => {

  let modalManagerService: ModalManagerService;
  beforeEach(() => {
    modalManagerService = new ModalManagerService();
    modalManagerService.initHandleBackBrowser(VibentModals.EXPANDED_BUBBLE);
  });

  it('check all modal ids start with a #', () => {
    for (const modalId in VibentModals) {
      expect(VibentModals[modalId].substr(0, 1)).toEqual('#');
    }
  });

});