import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GroupMembersComponent} from '../dialogs/group-members/group-members.component';
import {GroupPreviewMember} from '../models/group-preview-member';
import {EventCreationComponent} from '../dialogs/event-creation/event-creation.component';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {ActivatedRoute} from '@angular/router';
import {AddGroupMembersComponent} from '../dialogs/group-members/add-group-members/add-group-members.component';
import {AdminPanelService} from '../services/admin-panel.service';
import {GroupSettingsComponent} from '../dialogs/admin-panel/group-settings/group-settings.component';
import {GroupRequestsComponent} from '../dialogs/admin-panel/group-requests/group-requests.component';
import {GroupRightsComponent} from '../dialogs/admin-panel/group-rights/group-rights.component';

declare const $: any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit, OnDestroy {

  events: Event[];
  groupPreviewMembers: GroupPreviewMember[] = [];
  group: Group;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private adminPanel: AdminPanelService) {

    this.group = this.route.snapshot.data['group'];
    this.events = this.route.snapshot.data['groupEvents'];
    this.events.sort(this.sortEventByDate);​
  }

  ngOnDestroy() {
    this.adminPanel.toggleGroupPanel({groupRef: null, isOpen: false});
  }

  ngOnInit() {
    this.groupPreviewMembers = [
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
      new GroupPreviewMember('Conor Ryan', '/assets/img/conor.jpg', '22 May'),
      new GroupPreviewMember('Francois Dupond', '/assets/img/francois.jpg', '22 May'),
    ];
    this.adminPanel.toggleGroupPanel({groupRef: this.group.ref, isOpen: true});
    this.adminPanel.groupUpdated.subscribe(result => {
      this.group = result;
    });
  }

  openGroupMembersDialog() {
    this.dialog.open(GroupMembersComponent, {
      data: {groupMembers: this.groupPreviewMembers}
    });
  }

  openAddGroupMemberDialog() {
    this.dialog.open(AddGroupMembersComponent);
  }

  openEventCreationDialog() {
    const groups: any[] = [];
    groups.push({ref: this.group.ref, name: this.group.name, fromGroup: true});
    this.dialog.open(EventCreationComponent, {
      data: {groups: groups}
    });
  }

  openSettingsDialog() {
    this.dialog.open(GroupSettingsComponent, {
      data: {group: this.group}
    });
  }

  openRightsDialog() {
    this.dialog.open(GroupRightsComponent, {
      data: {group: this.group}
    });
  }

  openRequestsDialog() {
    this.dialog.open(GroupRequestsComponent, {
      data: {group: this.group}
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  sortEventByDate(a, b) {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  };
}
