import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandedBubbleControllerComponent } from './expanded-bubble-controller.component';
import { RouterModule } from '@angular/router';
import { ExpandedTravelBubbleComponentModule } from './travel-bubble/expanded-travel-bubble.module';
import { ExpandedAlimentationBubbleComponentModule } from './alimentation-bubble/expanded-alimentation-bubble.module';
import { ExpandedFreeBubbleComponentModule } from './free-bubble/expanded-free-bubble.module';
import { ExpandedCheckboxBubbleComponentModule } from './checkbox-bubble/expanded-checkbox-bubble.module';
import { ExpandedPlanningBubbleComponentModule } from './planning-bubble/expanded-planning-bubble.module';
import { ExpandedSurveyBubbleComponentModule } from './survey-bubble/expanded-survey-bubble.module';
import { ExpandedBubbleTitleService } from '../../../../../core/services/expanded-bubble-title.service';
import { LoaderModule } from '../../../../../core/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule,
    ExpandedTravelBubbleComponentModule,
    ExpandedAlimentationBubbleComponentModule,
    ExpandedFreeBubbleComponentModule,
    ExpandedCheckboxBubbleComponentModule,
    ExpandedPlanningBubbleComponentModule,
    ExpandedSurveyBubbleComponentModule,
  ],
  declarations: [ExpandedBubbleControllerComponent],
  exports: [ExpandedBubbleControllerComponent],
  providers: [ExpandedBubbleTitleService],
})
export class ExpandedBubbleControllerModule {
}
