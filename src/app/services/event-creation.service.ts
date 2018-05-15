import {Injectable} from '@angular/core';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {HttpService} from '../http/http.service';
import {Router} from '@angular/router';

@Injectable()
export class EventCreationService {
  constructor(private httpService: HttpService,
              private router: Router) {}

  public createEvent(formevalue: any): void {
    const event: Event = {
      title: formevalue.title,
      description: formevalue.description,
      startDate: formevalue.date,
      groupRef: '8a8e2acc-5b04-4de4-b006-233474b37626',
    };
    this.httpService.createEvent(event).subscribe(res => {  this.router.navigate(['/events/' + res['ref']]); });

  }

}
