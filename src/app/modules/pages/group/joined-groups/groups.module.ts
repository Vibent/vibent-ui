import { NgModule } from '@angular/core';
import { GroupPreviewModule } from '../group-preview/group-preview.module';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupCreationModule } from '../dialogs/group-creation/group-creation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GroupPreviewModule,
    GroupCreationModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    GroupsComponent
  ],
  providers: [],
})
export class GroupsModule {
}
