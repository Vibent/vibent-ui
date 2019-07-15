import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { DistributionListsService, } from '../../../../../../core/services/distribution-lists/distribution-lists.service';
import { DistributionListsNavigationService, } from '../../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DistributionList } from '../../../../../../shared/models/distribution-list';
import { LoaderService } from '../../../../../../core/services/loader/service/loader.service';
import { ModalManagerService, VibentModals } from '../../../../../../core/services/modal-manager.service';
import { HttpService } from '../../../../../../core/http/http.service';
import { NotificationsService, NotificationType } from '../../../../../../core/services/notifications.service';
import Swal from 'sweetalert2';
import { MessageService } from '../../../../../../core/services/i18n/message.service';

@Component({
  selector: 'expanded-distribution-list-settings',
  templateUrl: './expanded-distribution-list-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedDistributionListSettingsComponent implements OnInit {

  @Input()
  list: DistributionList;
  @Output()
  closeSettings = new EventEmitter();
  form: FormGroup;
  title: FormControl;
  description: FormControl;
  titleValidSetted = true;

  constructor(private distributionListsService: DistributionListsService,
              private notificationService: NotificationsService,
              private modalManagerService: ModalManagerService,
              private messageService: MessageService,
              private httpService: HttpService,
              private loaderService: LoaderService,
              private navigation: DistributionListsNavigationService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: this.title = new FormControl(this.list.title, Validators.required),
      description: this.description = new FormControl(this.list.description),
    });
  }

  close(): void {
    this.modalManagerService.hideModal(VibentModals.EXPANDED_DISTRIBUTION_LIST);
  }

  updateInfos() {
    this.loaderService.displayLoadingPageModal();
    this.titleValidSetted = this.title.valid;
    this.list.title = this.title.value;
    this.description.value === '' ? this.list.description = null : this.list.description = this.description.value;
    const list = {
      title: this.list.title,
      id: this.list.id,
      description: this.list.description,
    };
    this.httpService.updateList(list).subscribe(() => {
      this.loaderService.closeLoadingPageModal();
      this.close();
      this.closeSettings.emit(true);
      this.distributionListsService.updated$.next(true);
    }, () => {
      this.loaderService.closeLoadingPageModal();
      this.notificationService.notify(this.messageService.AN_ERROR_OCCURED, NotificationType.DANGER);
    });
  }

  deleteList() {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.close();
        this.closeSettings.emit(true);
        this.httpService.deleteList(this.list).subscribe(() => {
          this.distributionListsService.updated$.next(true);
          Swal(
            this.messageService.DELETED,
            this.messageService.LIST_DELETED,
            'success'
          );
        }, () => {
          this.notificationService.notify(this.messageService.AN_ERROR_OCCURED, NotificationType.DANGER);
        });
      }
    });
  }
}
