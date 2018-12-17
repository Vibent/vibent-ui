import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { ProfileImageService } from '../../../../../core/http/profile-image.service';
import { UserManagementService } from '../../../../../core/services/user-management.service';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

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
              private dialogRef: MatDialogRef<ProfileSettingsComponent>,
              private httpService: HttpService,
              private profileImageService: ProfileImageService,
              private loaderService: LoaderService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data,
              private userManagementService: UserManagementService) {
    dialogRef.disableClose = true;
    this.user = this.userManagementService.getMe();
    this.croppedImage = this.user.profilePicLocation;
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
    this.firstName = new FormControl(this.user.firstName, Validators.required);
    this.lastName = new FormControl(this.user.lastName, Validators.required);
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  public close() {
    this.dialogRef.close();
    this.fileToUpload = null;
  }

  public updateInfo(): void {
    this.loaderService.displayLoadingPageModal();
    this.dialogRef.close();
    this.firstnameValidSetted = this.firstName.valid;
    this.lastnameValidSetted = this.lastName.valid;

    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    const user = {
      ref: this.user.ref,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName
    };

    this.httpService.updateUser(user).subscribe(() => {
      this.userManagementService.setMe();
    });
    if (this.fileToUpload) {
      this.loaderService.displayLoadingPageModal();
      this.profileImageService.uploadProfilePic(this.fileToUpload).subscribe(() => {
        this.userManagementService.setMe();
      });
    }
  }

}
