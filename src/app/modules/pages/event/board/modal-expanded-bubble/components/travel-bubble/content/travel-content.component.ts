import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { TravelBubble } from '../../../../../../../../shared/models/bubbles/TravelBubble';

@Component({
  selector: 'travel-content',
  templateUrl: './travel-content.html'
})
export class TravelContentComponent implements OnInit {

  @Input()
  travelBubble: TravelBubble;
  @Input()
  eventRef: string;
  openProposalCreation = false;
  openRequestCreation = false;

  constructor() {

  }

  ngOnInit() {
    
  }

  toggleProposalCreation() {
    this.openProposalCreation = !this.openProposalCreation;
  }

  toggleRequestCreation() {
    this.openRequestCreation = !this.openRequestCreation;
  }

  onBubbleUpdate(updatedBubble: TravelBubble) {
    this.travelBubble = updatedBubble;
  }


}
