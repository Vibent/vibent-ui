import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/models/event';
import { ModalManagerService, VibentModals } from '../../../../core/services/modal-manager.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  public events: Event[];

  constructor(private route: ActivatedRoute, private modalManagerService: ModalManagerService) {
    this.events = this.route.snapshot.data['events'].sort(this.sortEventByDate);
  }

  ngOnInit() {
    this.modalManagerService.initHandleBackBrowser(VibentModals.EVENT_CREATION);
  }

  openEventCreationDialog(): void {
    this.modalManagerService.showModal(VibentModals.EVENT_CREATION);
  }

  sortEventByDate(a, b) {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  }
}
