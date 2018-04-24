import { Component, OnInit } from '@angular/core';
import {GroupPreview} from '../models/group-preview';
import {GroupPreviewMember} from '../models/group-preview-member';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groupsPreview: GroupPreview[]

  constructor() { }

  ngOnInit() {
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

    this.groupsPreview = [
      new GroupPreview('Group Name 1', 10, 'Blablabla bla', groupPreviewMembers),
      new GroupPreview('Group Name 2', 1000, 'Blablabla bla 2 Blablabla bla Blablabla ' +
        'bla Blablabla bla Blablabla bla Blablabla bla', groupPreviewMembers),
    ];
  }

}
