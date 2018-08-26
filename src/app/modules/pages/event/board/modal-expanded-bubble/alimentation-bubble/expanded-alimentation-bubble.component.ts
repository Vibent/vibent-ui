import { Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble } from '../../../../../../shared/models/bubbles/AlimentationBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html'
})
export class ExpandedAlimentationBubbleComponent implements OnInit {

  @Input()
  public alimentationBubble: AlimentationBubble;

  ngOnInit() {
  }

  public hideLogo(): boolean {
    return !($(window).width() < 470);
  }

  close() {
    $('#expanded-bubble').modal('hide');
  }
}
