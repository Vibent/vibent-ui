import { Component, OnInit } from '@angular/core';
import { GroupPreview } from '../models/group-preview';
import { GroupPreviewMember } from '../models/group-preview-member';
import { MatDialog } from '@angular/material';
import { GroupCreationComponent } from '../dialogs/group-creation/group-creation.component';
import { Group } from '../models/group';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
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
