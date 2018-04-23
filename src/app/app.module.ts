import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {
  AgmCoreModule
} from '@agm/core';
import {GroupsModule} from './groups/groups.module';
import {FooterModule} from './components/footer/footer.module';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {NavbarModule} from './components/navbar/navbar.module';
import {CommonModule} from '@angular/common';
import {EventsModule} from './events/events.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    CommonModule,
    RouterModule,
    GroupsModule,
    EventsModule,
    FooterModule,
    SidebarModule,
    NavbarModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
