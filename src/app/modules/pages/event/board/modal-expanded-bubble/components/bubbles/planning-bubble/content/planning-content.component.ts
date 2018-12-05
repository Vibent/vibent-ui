import { Component, Input, OnInit } from '@angular/core';
import { PlanningBubble } from '../../../../../../../../../shared/models/bubbles/PlanningBubble';

@Component({
  selector: 'planning-content',
  templateUrl: './planning-content.html'
})
export class PlanningContentComponent implements OnInit {

  @Input()
  planningBubble: PlanningBubble;
  @Input()
  eventRef: string;
  toggleEntryCreation = false;

  ngOnInit() {
    this.sortEntries();
  }

  addEntryCreation() {
    this.toggleEntryCreation = !this.toggleEntryCreation;
  }

  onBubbleUpdate(updatedBubble: PlanningBubble) {
    this.planningBubble = updatedBubble;
    this.sortEntries();
  }

  sortEntries() {
    this.planningBubble.entries.sort(this.sortEntryByDate);
  }

  sortEntryByDate(a, b) {
    const dateA = new Date(a.start).getTime();
    const dateB = new Date(b.start).getTime();
    return dateA > dateB ? 1 : -1;
  }
}
