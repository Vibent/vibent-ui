import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupCreationComponent } from '../dialogs/group-creation/group-creation.component';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../shared/models/group';

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

  public openDialog(): void {
    this.dialog.open(GroupCreationComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    });
  }
}
