import { Component, Input, OnInit } from '@angular/core';
import { CheckboxBubble } from '../../../../../shared/models/bubbles/CheckboxBubble';

@Component({
  selector: 'app-checkbox-bubble-preview',
  templateUrl: './checkbox-bubble-preview.html'
})
export class CheckboxBubblePreviewComponent implements OnInit {

  @Input()
  checkboxBubble: CheckboxBubble;
  answersCount: number;

  ngOnInit(): void {
   this.answersCount = this.checkboxBubble.options.filter(option => option.answers.length > 0).length;
  }

}
