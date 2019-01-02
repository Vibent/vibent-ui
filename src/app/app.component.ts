import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public location: Location) {
  }

  ngOnInit() {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    }
  }

  ngAfterViewInit() {
    this.runOnRouteChange();
  }

  public isMaps(path): boolean {
    let title = this.location.prepareExternalUrl(this.location.path());
    title = title.slice(1);
    return path !== title;
  }

  public runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    }
  }

  public isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
