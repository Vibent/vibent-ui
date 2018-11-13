import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { ProfileImageService } from '../../../../../core/http/profile-image.service';
import { UserManagementService } from '../../../../../core/services/user-management.service';

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
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data,
              private userManagementService: UserManagementService) {
    dialogRef.disableClose = true;
    this.user = this.userManagementService.getMe();
    this.croppedImage = this.user.imagePath;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image: string) {
    this.croppedImage = image;
  }

  imageCroppedFile(file: File) {
    this.fileToUpload = file;
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
      this.dialogRef.close(this.form.value);
      this.userManagementService.setMe();
    });
    if (this.fileToUpload) {
      this.profileImageService.uploadProfileImage(this.fileToUpload, user).subscribe(() => this.userManagementService.setMe());
    }
  }

}
