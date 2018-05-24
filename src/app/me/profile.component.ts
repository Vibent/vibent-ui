import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import {MatDialog} from '@angular/material';
import {ProfileSettingsComponent} from '../dialogs/profile-settings/profile-settings.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, public dialogSettings: MatDialog) {
    this.user = this.route.snapshot.data['user'];
  }

  ngOnInit() {

  }

  openSettingsDialog() {
    const dialogRef = this.dialogSettings.open(ProfileSettingsComponent, {
      data: {user: this.user}
    });
  }

}
