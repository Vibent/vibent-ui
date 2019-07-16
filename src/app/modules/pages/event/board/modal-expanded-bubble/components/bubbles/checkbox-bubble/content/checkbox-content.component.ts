import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CheckboxBubble, CheckboxOption } from '../../../../../../../../../shared/models/bubbles/CheckboxBubble';
import { OptionCreationComponent } from './option-creation/option-creation.component';

@Component({
  selector: 'checkbox-content',
  templateUrl: './checkbox-content.html'
})
export class CheckboxContentComponent implements OnInit {

  @Input()
  checkboxBubble: CheckboxBubble;
  @Input()
  eventRef: string;
  @Output()
  updatedCheckboxBubble = new EventEmitter<CheckboxBubble>();
  @ViewChild(OptionCreationComponent)
  private optionCreationComponent: OptionCreationComponent;
  ratio: string;

  ngOnInit() {
    this.getRatioFromOptions();
  }

  addOptionCreation() {
    this.optionCreationComponent.toggleCreationCard();
  }

  onBubbleUpdate(updatedBubble: CheckboxBubble) {
    this.checkboxBubble = updatedBubble;
    this.updatedCheckboxBubble.emit(updatedBubble);
    this.getRatioFromOptions();
  }

  onCheckboxOptionUpdate(updatedOptions: CheckboxOption) {
    this.checkboxBubble.options[this.checkboxBubble.options.findIndex(option => option.id === updatedOptions.id)] = updatedOptions;
    this.getRatioFromOptions();
  }

  getRatioFromOptions() {
    this.ratio = this.checkboxBubble.options.filter((option) => option.answers.length > 0).length + '/' + this.checkboxBubble.options.length;
  }
}
