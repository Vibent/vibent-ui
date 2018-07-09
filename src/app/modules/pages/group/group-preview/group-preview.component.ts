import { Component, Input, OnInit } from '@angular/core';
import { GroupPreview } from '../../../../shared/models/group-preview';

@Component({
  selector: 'app-group-preview',
  templateUrl: './group-preview.component.html',
})
export class GroupPreviewComponent implements OnInit {

  @Input()
  public groupPreview: GroupPreview;

  constructor() {
  }

  ngOnInit() {
  }

}
