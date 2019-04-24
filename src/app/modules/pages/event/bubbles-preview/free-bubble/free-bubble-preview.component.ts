import { Component, Input } from '@angular/core';
import { FreeBubble } from '../../../../../shared/models/bubbles/FreeBubble';
import { ContributorTextType } from '../bubble-contributor-icons/bubble-contributor-icons.component';

declare const $: any;

@Component({
  selector: 'free-bubble-preview',
  templateUrl: './free-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './free-bubble-preview.scss']
})
export class FreeBubblePreviewComponent {

  @Input()
  public bubble: FreeBubble;

  ContributorTextType = ContributorTextType;

  hasContent(bubble: FreeBubble): boolean {
    return bubble.content !== null && (bubble.content.trim().length !== 0);
  }

}
