import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { ProfileImageService } from '../../../../../core/http/profile-image.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  public user: User;
  public form: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  fileToUpload: FileList = null;
  userProfileImage: File = null;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ProfileSettingsComponent>,
              private httpService: HttpService,
              private profileImageService: ProfileImageService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.user = data.user;
    dialogRef.disableClose = true;
    const dialogHeight = window.innerHeight <= 600 ? window.innerHeight - 50 + 'px' : '600px';
    dialogRef.updateSize('600px', dialogHeight);
  }

  ngOnInit() {
    this.firstName = new FormControl(this.user.firstName, Validators.required);
    this.lastName = new FormControl(this.user.lastName, Validators.required);
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
    });

    this.profileImageService.getProfileImage(this.user.ref).subscribe((data) => {
      this.createImageFromBlob(data);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.userProfileImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public close() {
    this.dialogRef.close();
    this.fileToUpload = null;
  }

  public updateInfo(): void {
    this.dialogRef.close(this.form.value);
    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    const user = {
      ref: this.user.ref,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName
    };
    this.httpService.updateUser(user).subscribe((data) => console.log(data));
    if (this.fileToUpload && this.fileToUpload.item(0)) {
      this.profileImageService.uploadProfileImage(this.fileToUpload.item(0), user).subscribe(() => this.profileImageService.profilePictureChanged());
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        const a: any = event.target;
        this.userProfileImage = a.result;
      };
    }
  }

}
