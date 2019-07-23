import { LOCALE_ID, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';
import { LoadingPageModule } from './services/loader/loading-page/loading-page.module';
import { LoaderModule } from './loader/loader.module';
import { I18nModule } from './services/i18n/i18n.module';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './http/http.service';
import { ScreenService } from './services/screen.service';
import { RoutingStateService } from './services/routing-state.service';
import { LoaderService } from './services/loader/service/loader.service';
import { UserManagementService } from './services/user-management.service';

@NgModule({
  imports: [
    HttpClientModule,
    LoadingPageModule,
    LoaderModule,
    I18nModule
  ],
  declarations: [],
  providers: [
    CookieService,
    HttpService,
    ScreenService,
    RoutingStateService,
    LoaderService,
    UserManagementService,
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})

export class CoreModule {
}
