import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { ProfileImageService } from '../../../../../core/http/profile-image.service';
import { UserManagementService } from '../../../../../core/services/user-management.service';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { MessageService } from '../../../../../core/services/i18n/message.service';

@Component({
  selector: 'profile-settings',
  templateUrl: './profile-settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  @Input()
  user: User;
  form: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  fileToUpload: File = null;
  croppedImage: any;
  imageChangedEvent: any = '';
  firstnameValidSetted = true;
  lastnameValidSetted = true;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private profileImageService: ProfileImageService,
              private modalManagerService: ModalManagerService,
              private notificationService: NotificationsService,
              private messageService: MessageService,
              private loaderService: LoaderService,
              private router: Router,
              private userManagementService: UserManagementService) {
  }

  fileChangeEvent(event: any): void {
    const self = this;
    self.getBase64(event.target.files[0]);
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageChangedEvent = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  imageCropped(event) {
    this.fileToUpload = event.file;
    this.croppedImage = event.base64;
  }

  imageChangedEventToNull() {
    this.imageChangedEvent = null;
  }

  ngOnInit() {
    this.croppedImage = this.user.profilePicLocation;
    this.firstName = new FormControl(this.user.firstName, Validators.required);
    this.lastName = new FormControl(this.user.lastName, Validators.required);
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  public close() {
    this.modalManagerService.hideModal(VibentModals.PROFILE_SETTINGS);
    this.fileToUpload = null;
  }

  public updateInfo(): void {
    this.firstnameValidSetted = this.firstName.valid;
    this.lastnameValidSetted = this.lastName.valid;

    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    const user = {
      ref: this.user.ref,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName
    };

    if (this.firstnameValidSetted && this.lastnameValidSetted) {
      this.loaderService.displayLoadingPageModal();
      this.httpService.updateUser(user).subscribe(() => {
        this.updateUserAndCloseModal();
      }, () => {
        this.notifyErrorAndCloseLoading();
      });
    }
    if (this.fileToUpload) {
      this.loaderService.displayLoadingPageModal();
      this.profileImageService.uploadProfilePic(this.fileToUpload).subscribe(() => {
        this.updateUserAndCloseModal();
      }, () => {
        this.notifyErrorAndCloseLoading();
      });
    }
  }

  updateUserAndCloseModal() {
    this.userManagementService.setMe();
    this.loaderService.closeLoadingPageModal();
    this.close();
  }

  notifyErrorAndCloseLoading() {
    this.notificationService.notify(this.messageService.AN_ERROR_OCCURED, NotificationType.DANGER);
    this.loaderService.closeLoadingPageModal();
  }

}
