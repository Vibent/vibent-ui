import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../../shared/models/group';

@Component({
  selector: 'app-group-preview',
  templateUrl: './group-preview.component.html',
})
export class GroupPreviewComponent implements OnInit {

  @Input()
  public group: Group;

  constructor() {
  }

  ngOnInit() {
  }

}
