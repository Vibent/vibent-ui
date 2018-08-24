import { Injectable } from '@angular/core';
import { BubbleType } from '../../shared/models/bubbles/IBubble';

@Injectable()
export class ExpandedBubbleTitleService {

  public BubbleType = BubbleType;

  constructor() {
  }

  getTitleFromBubbleType(bubbleType: BubbleType) {
    switch (bubbleType) {
      case BubbleType.TRAVEL: {
       return 'Travel';
      }
      case BubbleType.ALIMENTATION: {
        return 'Alimentation';
      }
      case BubbleType.SURVEY: {
        return 'Survey';
      }
      case BubbleType.CHECKBOX: {
        return 'Checkbox';
      }
      case BubbleType.PLANNING: {
        return 'Planning';
      }
      case BubbleType.FREE: {
        return 'Free';
      }
      default: {
        return 'Oops';
      }
    }

  }

}
