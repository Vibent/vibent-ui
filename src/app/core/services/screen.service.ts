import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class ScreenService {

  isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

  scrollToTop() {
    document.body.scrollTop = 0;
  }

}
