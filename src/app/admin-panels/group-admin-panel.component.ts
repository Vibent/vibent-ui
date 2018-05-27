import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {HttpService} from '../http/http.service';
import {Group} from '../models/group';
import {GroupSettingsComponent} from '../dialogs/admin-panel/group-settings/group-settings.component';
import {GroupRightsComponent} from '../dialogs/admin-panel/group-rights/group-rights.component';

@Component({
  selector: 'app-group-admin-panel',
  templateUrl: './group-admin-panel.component.html',
  styleUrls: ['./group-admin-panel.component.css']
})
export class GroupAdminPanelComponent implements OnInit {

  @Input()
  groupRef: string;
  group: Group;

  constructor(private httpService: HttpService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.httpService.getGroup(this.groupRef).subscribe((group) => {
      this.group = group
    });
  }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(GroupSettingsComponent, {
      data: {group: this.group}
    });
  }

  openRightsDialog() {
    const dialogRef = this.dialog.open(GroupRightsComponent, {
      data: {group: this.group}
    });
  }

}
