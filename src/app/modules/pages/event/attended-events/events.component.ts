import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
import { Event } from '../../../../shared/models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  public groups: any = [];
  public events: Event[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private httpService: HttpService) {
    this.events = this.route.snapshot.data['events'].sort(this.sortEventByDate);
    this.httpService.getGroups().subscribe((groups) => {
      for (const group of groups) {
        const g = {ref: group.ref, name: group.name, fromGroup: false};
        this.groups.push(g);
      }
    });
  }

  ngOnInit() {
  }

  goToGroupPage() {
    this.router.navigate(['/groups']);
  }

  sortEventByDate(a, b) {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  }
}
