import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../shared/models/group';

declare var $: any;

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html'
})
export class GroupsComponent implements OnInit {

  public groups: Group[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.groups = this.route.snapshot.data['groups'];
  }

  public openGroupCreationModal() {
    $('#modalGroupCreation').modal('show');
  }
}
