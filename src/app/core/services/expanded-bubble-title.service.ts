import { Injectable } from '@angular/core';
import { BubbleType } from '../../shared/models/bubbles/IBubble';

@Injectable()
export class ExpandedBubbleTitleService {
  
  constructor() {
  }

  getTitleFromBubbleType(bubbleType: BubbleType) {
    switch (bubbleType) {
      case BubbleType.TravelBubble: {
       return 'Travel';
      }
      case BubbleType.AlimentationBubble: {
        return 'Alimentation';
      }
      case BubbleType.SurveyBubble: {
        return 'Survey';
      }
      case BubbleType.CheckboxBubble: {
        return 'Checkbox';
      }
      case BubbleType.PlanningBubble: {
        return 'Planning';
      }
      case BubbleType.FreeBubble: {
        return 'Free';
      }
      default: {
        return 'Oops';
      }
    }

  }

}
