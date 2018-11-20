import { Component } from '@angular/core';
import { LoaderSize } from '../../../../shared/global/constants';

@Component({
  selector: 'loading-page',
  templateUrl: './loading-page.component.html'
})
export class LoadingPageComponent {

  loaderSize = LoaderSize.medium;

  constructor() {
  }



}
