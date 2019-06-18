import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'add-bubble-icon',
  templateUrl: './add-bubble-icon.component.html',
  styleUrls: ['./add-bubble-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBubbleIconComponent {

  @Input()
  isBoardEmpty: boolean;

  constructor() {
  }
}
