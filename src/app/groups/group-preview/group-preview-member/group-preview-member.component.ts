import {Component, Input, OnInit} from '@angular/core';
import {GroupPreviewMember} from './group-preview-member';

@Component({
  selector: 'app-group-preview-member',
  templateUrl: './group-preview-member.component.html',
  styleUrls: ['./group-preview-member.component.css']
})

export class GroupPreviewMemberComponent implements OnInit {

  @Input()
  groupPreviewMembers: GroupPreviewMember[];

  constructor() {}

  ngOnInit() {}

}
