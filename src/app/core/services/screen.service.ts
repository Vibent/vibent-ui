import { Injectable } from '@angular/core';
declare var $: any;

export enum BootstrapWidth {
  xs = 576,
  sm = 540,
  md = 720,
  lg = 960,
  xl = 1140
}

@Injectable()
export class ScreenService {

  isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

  scrollToTop() {
    document.body.scrollTop = 0;
  }

  isLowerThanBootstrapWidth(w: BootstrapWidth) {
    return $(window).width() < w;
  }
}
