import { Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble } from '../../../../../../shared/models/bubbles/AlimentationBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html'
})
export class ExpandedAlimentationBubbleComponent implements OnInit {
  
  @Input()
  alimentationBubble: AlimentationBubble;
  @Input()
  eventRef: string;
  toggleAddFoodEntry = false;
  toggleAddDrinkEntry = false;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  close() {
    $('#expanded-bubble').modal('hide');
  }
  
  addFoodEntry() {
    this.toggleAddFoodEntry = !this.toggleAddFoodEntry;
    this.toggleAddDrinkEntry = false;
  }
  
  addDrinkEntry() {
    this.toggleAddDrinkEntry = !this.toggleAddDrinkEntry;
    this.toggleAddFoodEntry = false;
  }
  
  onBubbleUpdate(updatedBubble: AlimentationBubble) {
    this.alimentationBubble = updatedBubble;
  }
  
}
