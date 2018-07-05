import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GroupPreviewMember } from '../../../../../shared/models/group-preview-member';

@Component({
  selector: 'app-group-preview-member',
  templateUrl: './group-preview-member.component.html',
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
