import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BubbleType } from '../../../../../../shared/models/bubbles/IBubble';
import { Event } from '../../../../../../shared/models/event';

declare const $: any;

export enum LimitedAvailabilities {
  AlimentationBubble = 'alimentation',
  PlanningBubble = 'planning',
  TravelBubble = 'travel'
}

@Component({
  selector: 'bubbles-list',
  templateUrl: './bubbles-list.html'
})
export class BubblesListComponent {

  BubbleType =  BubbleType;
  alimentationAvailable: boolean;
  travelAvailable: boolean;
  planningAvailable: boolean;

  @Output()
  bubbleType = new EventEmitter<BubbleType>();

  @Input('event')
  set availability(event: Event) {
    if (event.alimentationBubbles.length > 0) {
      this.alimentationAvailable = false;
      this.addTooltip(LimitedAvailabilities.AlimentationBubble);
    } else {
      this.alimentationAvailable = true;
      this.removeTooltip(LimitedAvailabilities.AlimentationBubble);
    }

    if (event.travelBubbles.length > 0) {
      this.travelAvailable = false;
      this.addTooltip(LimitedAvailabilities.TravelBubble);
    } else {
      this.travelAvailable = true;
      this.removeTooltip(LimitedAvailabilities.TravelBubble);
    }

    if (event.planningBubbles.length > 0) {
      this.planningAvailable = false;
      this.addTooltip(LimitedAvailabilities.PlanningBubble);
    } else {
      this.planningAvailable = true;
      this.removeTooltip(LimitedAvailabilities.PlanningBubble);
    }
  }

  constructor() {
  }

  removeTooltip(availability: LimitedAvailabilities) {
    $('#' + availability + '-availability')
      .removeClass('disabled-card-bubble disabled-' + availability)
      .addClass('card-bubble ' + availability);

    $(() => {
      $('#' + availability + '-availability').tooltip('dispose');
    });
  }

  addTooltip(availability: LimitedAvailabilities) {
    $('#' + availability + '-availability')
      .removeClass('card-bubble ' + availability)
      .addClass('disabled-card-bubble disabled-' + availability);
    $(() => {
      $('#' + availability + '-availability').tooltip('enable');
    });
  }

  createBubble(bubbleType: BubbleType) {
    this.bubbleType.emit(bubbleType);
  }
}
