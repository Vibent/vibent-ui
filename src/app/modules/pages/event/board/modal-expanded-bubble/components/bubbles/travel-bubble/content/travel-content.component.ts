import {
  Component, EventEmitter,
  Input,
  OnInit, Output, ViewChild
} from '@angular/core';
import { TravelBubble } from '../../../../../../../../../shared/models/bubbles/TravelBubble';
import { TravelProposalCreationComponent } from './travel-proposal-creation/travel-proposal-creation.component';
import { TravelRequestCreationComponent } from './travel-request-creation/travel-request-creation.component';
import { AlimentationBubble } from '../../../../../../../../../shared/models/bubbles/AlimentationBubble';

@Component({
  selector: 'travel-content',
  templateUrl: './travel-content.html'
})
export class TravelContentComponent implements OnInit {

  @Input()
  travelBubble: TravelBubble;
  @Input()
  eventRef: string;
  @Output()
  updatedTravelBubble = new EventEmitter<TravelBubble>();
  @ViewChild(TravelProposalCreationComponent)
  private travelProposalCreationComponent: TravelProposalCreationComponent;
  @ViewChild(TravelRequestCreationComponent)
  private travelRequestCreationComponent: TravelRequestCreationComponent;
  constructor() {
  }

  ngOnInit() {
  }

  proposalCreationExpanded() {
    return this.travelProposalCreationComponent.toggle;
  }

  requestCreationExpanded() {
    return this.travelRequestCreationComponent.toggle;
  }

  toggleProposalCreation() {
    this.travelProposalCreationComponent.toggleCreationCard();
  }

  toggleRequestCreation() {
    this.travelRequestCreationComponent.toggleCreationCard();
  }

  onBubbleUpdate(updatedBubble: TravelBubble) {
    this.travelBubble = updatedBubble;
    this.updatedTravelBubble.emit(updatedBubble);
  }


}
