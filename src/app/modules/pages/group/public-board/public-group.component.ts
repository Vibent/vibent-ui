import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../shared/models/group';

@Component({
  selector: 'app-group',
  templateUrl: './public-group.component.html'
})
export class PublicGroupComponent implements OnInit {

  public group: Group;

  constructor(private route: ActivatedRoute) {
    this.group = this.route.snapshot.data['group'];
  }

  ngOnInit() {

  }

}
