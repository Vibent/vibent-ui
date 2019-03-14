import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../shared/models/group';
import { GroupAdminPanelService } from '../../../../core/services/group-admin-panel.service';
import { Event } from '../../../../shared/models/event';
import { Subscription } from 'rxjs';
import { ScreenService } from '../../../../core/services/screen.service';
import { MessageService } from '../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit, OnDestroy {

  events: Event[];
  group: Group;
  subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private groupAdminPanelService: GroupAdminPanelService,
              public screenSizesService: ScreenService) {
    this.group = this.route.snapshot.data['group'];
    this.events = this.route.snapshot.data['groupEvents'].sort(this.sortEventByDate);
  }

  ngOnDestroy() {
    this.groupAdminPanelService.closeGroupPanel();
  }

  ngOnInit() {
    this.groupAdminPanelService.toggleGroupPanel(this.group.ref);
    this.subscriptions.push(this.groupAdminPanelService.groupUpdated$.subscribe(result => {
      this.group = result;
    }));
  }

  openGroupMembersDialog(): void {
    $('#modalGroupMembers').modal('show');
  }

  openAddGroupMemberDialog(): void {
    $('#modalAddGroupMembers').modal('show');
  }

  openEventCreationDialog(): void {
    $('#modalEventCreation').modal('show');
  }

  openSettingsDialog(): void {
    $('#modalGroupSettings').modal('show');
  }

  public sortEventByDate(a, b): any {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  }
}
