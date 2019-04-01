import { AlgoliaPlacesService } from './algolia-places.service';
import { HttpClient } from '@angular/common/http';

describe('Algolia places Service', () => {

  let alogliaPlacesService: AlgoliaPlacesService;
  let httpClientService: HttpClient;

  beforeEach(() => {
    httpClientService = <HttpClient>{

    };

    alogliaPlacesService = new AlgoliaPlacesService(httpClientService);
  });

  it('Should trigger next on eventUpdated$ subject', () => {
    expect(alogliaPlacesService.ALGOLIA_PLACES_URL).toBe('https://places-dsn.algolia.net/1/places/');
  });


});