import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          height: '0',
          opacity: '0'

        }),
        animate('.5s ease-out', style({
          height: '*',
          opacity: '1'

        })),
      ]),
      transition(':leave', [
        style({
          height: '*',
          opacity: '1'
        }),
        animate('.5s ease-out', style({
          height: '0',
          opacity: '0'
        }))
      ])
    ])
  ]
})

export class LoaderComponent {

  @Input() mainSize: any;
  @Input() mainCondition: boolean;
  @Input() eventUpdated: boolean;
  @Input() withLogo: boolean;
  @Input() expandedBubble: boolean;

  constructor() {

  }

}
