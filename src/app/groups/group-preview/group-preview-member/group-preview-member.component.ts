import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GroupPreviewMember} from '../../../models/group-preview-member';

@Component({
  selector: 'app-group-preview-member',
  templateUrl: './group-preview-member.component.html',
  styleUrls: ['./group-preview-member.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GroupPreviewMemberComponent implements OnInit {

  @Input()
  groupPreviewMember: GroupPreviewMember;

  constructor() {
  }

  ngOnInit() {
  }

}
