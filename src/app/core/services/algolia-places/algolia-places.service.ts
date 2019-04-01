import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlgoliaPlacesService {

  ALGOLIA_PLACES_URL = 'https://places-dsn.algolia.net/1/places/';
  constructor(private http: HttpClient) {
  }

  public getOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getPlace(objectId: string): Observable<any> {
    return this.http.get(this.ALGOLIA_PLACES_URL + objectId, this.getOptions());
  }
}