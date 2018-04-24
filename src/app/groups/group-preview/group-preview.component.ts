import {Component, Input, OnInit} from '@angular/core';
import {GroupPreview} from '../../models/group-preview';

@Component({
  selector: 'app-group-preview',
  templateUrl: './group-preview.component.html',
  styleUrls: ['./group-preview.component.css']
})
export class GroupPreviewComponent implements OnInit {

  @Input()
  groupPreview: GroupPreview;

  constructor() { }

  ngOnInit() {}

}
