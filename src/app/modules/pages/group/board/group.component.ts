import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupMembersComponent } from '../dialogs/group-members/group-members.component';
import { EventCreationComponent } from '../../event/dialogs/event-creation/event-creation.component';
import { ActivatedRoute } from '@angular/router';
import { AddGroupMembersComponent } from '../dialogs/group-members/add-group-members/add-group-members.component';
import { NGXLogger } from 'ngx-logger';
import { Group } from '../../../../shared/models/group';
import { GroupAdminPanelService } from '../../../../core/services/group-admin-panel.service';
import { GroupRequestsComponent } from '../../../../core/admin-panels/group/dialogs/group-requests/group-requests.component';
import { GroupRightsComponent } from '../../../../core/admin-panels/group/dialogs/group-rights/group-rights.component';
import { GroupSettingsComponent } from '../../../../core/admin-panels/group/dialogs/group-settings/group-settings.component';
import { Event } from '../../../../shared/models/event';

declare const $: any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  providers: [NGXLogger]
})
export class GroupComponent implements OnInit, OnDestroy {

  public events: Event[];
  public group: Group;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private groupAdminPanelService: GroupAdminPanelService) {

    this.group = this.route.snapshot.data['group'];
    this.events = this.route.snapshot.data['groupEvents'].sort(this.sortEventByDate);
  }

  ngOnDestroy() {
    this.groupAdminPanelService.toggleGroupPanel({groupRef: null, isOpen: false});
  }

  ngOnInit() {
    this.groupAdminPanelService.toggleGroupPanel({groupRef: this.group.ref, isOpen: true});
    this.groupAdminPanelService.groupUpdated.subscribe(result => {
      this.group = result;
    });
  }

  public openGroupMembersDialog(): void {
    this.dialog.open(GroupMembersComponent, {
      data: {group: this.group}
    });
  }

  public openAddGroupMemberDialog(): void {
    this.dialog.open(AddGroupMembersComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data: {group: this.group}
    });
  }

  public openEventCreationDialog(): void {
    this.dialog.open(EventCreationComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data: {groupRef: this.group.ref}
    });
  }

  public openSettingsDialog(): void {
    this.dialog.open(GroupSettingsComponent, {
      data: {group: this.group}
    });
  }

  public openRightsDialog(): void {
    this.dialog.open(GroupRightsComponent, {
      data: {group: this.group}
    });
  }

  public openRequestsDialog(): void {
    this.dialog.open(GroupRequestsComponent, {
      data: {group: this.group}
    });
  }

  public isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

  public sortEventByDate(a, b): any {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  }
}
