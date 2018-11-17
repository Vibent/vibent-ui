import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class ScreenSizesService {

  public isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

}
