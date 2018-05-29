import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpService } from '../http/http.service';
import { Group } from '../models/group';
import { GroupSettingsComponent } from '../dialogs/admin-panel/group-settings/group-settings.component';
import { GroupRightsComponent } from '../dialogs/admin-panel/group-rights/group-rights.component';
import { GroupRequestsComponent } from '../dialogs/admin-panel/group-requests/group-requests.component';

@Component({
  selector: 'app-group-admin-panel',
  templateUrl: './group-admin-panel.component.html',
  styleUrls: ['./group-admin-panel.component.css']
})
export class GroupAdminPanelComponent implements OnInit {

  @Input()
  public groupRef: string;
  public group: Group;

  constructor(private httpService: HttpService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.httpService.getGroup(this.groupRef).subscribe((group) => {
      this.group = group;
    });
  }

  public openSettingsDialog(): void {
    this.dialog.open(GroupSettingsComponent, {
      data: {group: this.group}
    });
  }

  openRightsDialog(): void {
    this.dialog.open(GroupRightsComponent, {
      data: {group: this.group}
    });
  }

  openRequestsDialog(): void {
    this.dialog.open(GroupRequestsComponent, {
      data: {group: this.group}
    });
  }

}
