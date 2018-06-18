import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './public-group.component.html',
  styleUrls: ['./public-group.component.css'],
})
export class PublicGroupComponent implements OnInit {

  public group: Group;

  constructor(private route: ActivatedRoute) {
    this.group = this.route.snapshot.data['group'];
  }

  ngOnInit() {

  }

}
