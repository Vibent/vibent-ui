import { Component, Input } from '@angular/core';
import { AlimentationEntry } from '../../../../../../../shared/models/bubbles/AlimentationBubble';
import { AlimType } from '../../../../../../../shared/models/bubbles/AlimentationBubble';

@Component({
  selector: 'alimentation-entry',
  templateUrl: './alimentation-entry.html'
})
export class AlimentationEntryComponent {

  @Input()
  alimentationEntry: AlimentationEntry;
  AlimType = AlimType;

}
