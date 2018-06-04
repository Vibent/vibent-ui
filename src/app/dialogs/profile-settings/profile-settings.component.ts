import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../../http/http.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  public user: User;
  public form: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ProfileSettingsComponent>,
              private httpService: HttpService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.user = data.user;
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '60%');
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
  }

}
