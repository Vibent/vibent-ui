import { HttpService } from '../../http/http.service';
import { BlacknoteService } from './blacknote.service';
import { LoaderService } from '../loader/service/loader.service';
import { Observable, of } from 'rxjs';
import { Event } from '../../../shared/models/event';


let blacknoteService: BlacknoteService;

let httpService: HttpService;
let loaderService: LoaderService;
const event: Event = {title: 'dummyEvent'};

describe('Blacknote Service', () => {

  beforeEach(() => {
    httpService = <HttpService> {
      getEvent(dummyRef: string): Observable<Event> {
        return of(event);
      }
    };

    loaderService = <LoaderService>{
    };

    blacknoteService = new BlacknoteService(httpService, loaderService);
  });

  it('Should trigger next on eventUpdated$ subject', () => {
    blacknoteService.eventUpdated$.subscribe((returnedEvent: Event) => {
      expect(returnedEvent.title).toEqual(event.title);
    });
    blacknoteService.updateEvent('dummyEventRef');
  });

  // difficult to test the rest of the service, depending on socket.io

});