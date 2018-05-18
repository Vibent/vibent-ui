import {Event} from './event';

export class EventPreview {

  constructor(public groupName: string,
              public groupSize: number,
              public eventLocation: string,
              public event: Event) {
  }

}
