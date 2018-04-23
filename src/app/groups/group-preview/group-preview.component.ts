import {Component, Input, OnInit} from '@angular/core';
import {GroupPreview} from './group-preview';
import {GroupPreviewMember} from './group-preview-member/group-preview-member';

@Component({
  selector: 'app-group-preview',
  templateUrl: './group-preview.component.html',
  styleUrls: ['./group-preview.component.css']
})
export class GroupPreviewComponent implements OnInit {

  @Input()
  groupsPreview: GroupPreview[];

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
