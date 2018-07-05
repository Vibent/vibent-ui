import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupCreationComponent } from '../dialogs/group-creation/group-creation.component';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../shared/models/group';
import { GroupPreview } from '../../../../shared/models/group-preview';
import { GroupPreviewMember } from '../../../../shared/models/group-preview-member';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html'
})
export class GroupsComponent implements OnInit {

  public groupsPreview: GroupPreview[] = [];
  public groups: Group[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
    const groupPreviewMembers = [
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
    this.groups = this.route.snapshot.data['groups'];
    for (const group of this.groups) {
      this.groupsPreview.push(new GroupPreview(group.ref, group.name, group.memberRefs.length, group.description, groupPreviewMembers));
    }
  }

  ngOnInit() {
  }

  public openDialog(): void {
    this.dialog.open(GroupCreationComponent, {});
  }
}
