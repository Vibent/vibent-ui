import { Component, Input, OnInit } from '@angular/core';
import { CheckboxBubble, CheckboxOption } from '../../../../../../shared/models/bubbles/CheckboxBubble';

@Component({
  selector: 'app-expanded-checkbox-bubble',
  templateUrl: './expanded-checkbox-bubble.html'
})
export class ExpandedCheckboxBubbleComponent implements OnInit {

  @Input()
  checkboxBubble: CheckboxBubble;
  @Input()
  eventRef: string;
  toggleOptionCreation = false;
  ratio: string;

  ngOnInit() {
    this.getRatioFromOptions();
  }

  addOptionCreation() {
    this.toggleOptionCreation = !this.toggleOptionCreation;
  }

  onBubbleUpdate(updatedBubble: CheckboxBubble) {
    this.checkboxBubble = updatedBubble;
  }

  onCheckboxOptionUpdate(updatedOptions: CheckboxOption) {
    this.checkboxBubble.options[this.checkboxBubble.options.findIndex(option => option.id === updatedOptions.id)] = updatedOptions;
    this.getRatioFromOptions();
  }

  getRatioFromOptions() {
    this.ratio = this.checkboxBubble.options.filter((option) => option.answers.length > 0).length + '/' + this.checkboxBubble.options.length;
  }
}
