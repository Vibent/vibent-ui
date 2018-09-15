import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../core/services/bubbles-services/bubble-creation.service.';

@Component({
  selector: 'app-modal-bubble-creation',
  templateUrl: './modal-bubble-creation.html'
})
export class ModalBubbleCreationComponent implements OnInit {
  
  constructor(private bubbleCreationService: BubbleCreationService) {
  }
  
  @Input()
  eventRef: string;
  
  ngOnInit(): void {
  
  }
  
  createAlimentationBubble() {
    this.bubbleCreationService.createAlimentationBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
  createTravelBubble() {
    this.bubbleCreationService.createTravelBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
  createCheckboxBubble() {
    this.bubbleCreationService.createCheckboxBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
  createSurveyBubble() {
    this.bubbleCreationService.createSurveyBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
  createPlanningBubble() {
    this.bubbleCreationService.createPlanningBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
  createFreeBubble() {
    this.bubbleCreationService.createFreeBubble(this.eventRef).subscribe((v) => console.log(v));
  }
  
}
