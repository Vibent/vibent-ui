import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BubbleType } from '../../../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'bubbles-list',
  templateUrl: './bubbles-list.html'
})
export class BubblesListComponent implements OnInit {

  @Output()
  bubbleType = new EventEmitter<BubbleType>();

  constructor() {
  }

  ngOnInit(): void {
  }

  createAlimentationBubble() {
    this.bubbleType.emit(BubbleType.AlimentationBubble);
  }

  createTravelBubble() {
    this.bubbleType.emit(BubbleType.TravelBubble);
  }

  createCheckboxBubble() {
    this.bubbleType.emit(BubbleType.CheckboxBubble);
  }

  createSurveyBubble() {
    this.bubbleType.emit(BubbleType.SurveyBubble);
  }

  createPlanningBubble() {
    this.bubbleType.emit(BubbleType.PlanningBubble);
  }

  createFreeBubble() {
    this.bubbleType.emit(BubbleType.FreeBubble);
  }

}
