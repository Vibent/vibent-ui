import { Component, Input, OnInit } from '@angular/core';
import { BubbleType, IBubble } from '../../../../../shared/models/bubbles/IBubble';
import { ExpandedBubbleTitleService } from '../../../../../core/services/expanded-bubble-title.service';
import { LoaderService } from '../../../../../core/services/loader/loader.service';

@Component({
  selector: 'app-expanded-bubble-controller',
  templateUrl: './expanded-bubble-controller.html'
})
export class ExpandedBubbleControllerComponent implements OnInit {

  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;

  public BubbleType = BubbleType;

  constructor(public expandedBubbleTitleService: ExpandedBubbleTitleService, public loaderService: LoaderService) {}

  ngOnInit(): void {

  }


}
