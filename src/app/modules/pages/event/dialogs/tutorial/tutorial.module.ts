import { NgModule } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
import { CommonModule } from '@angular/common';
import { TutorialWelcomeComponent } from './welcome/tutorial-welcome.component';
import { TutorialNavigationService } from '../../../../../core/services/tutorial-navigation.service';
import { TutorialCreateEventComponent } from './create-event/tutorial-create-event.component';
import { TutorialEnjoyComponent } from './enjoy/tutorial-enjoy.component';
import { TutorialJoinEventComponent } from './join-event/tutorial-join-event.component';
import { TutorialProfileComponent } from './profile/tutorial-profile.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TutorialComponent,
    TutorialWelcomeComponent,
    TutorialCreateEventComponent,
    TutorialJoinEventComponent,
    TutorialProfileComponent,
    TutorialEnjoyComponent,
  ],
  providers: [TutorialNavigationService],
  exports: [TutorialComponent]
})
export class TutorialModule {
}
