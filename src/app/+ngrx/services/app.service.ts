import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  constructor(
    // @Inject(SWAPI_API) public apiUrl: string,
    private http: HttpClient
  ) {}

    apiUrl = 'http://api.abcleague.webup-dev.pl/';

    // todo?
    // getAvailableCurrencies() {
    //   return this.http.get(this.apiUrl + 'currency');
    // }

    getCurrencyAdequateToUsersCountry() {
      this.http.get(this.apiUrl + 'reviews').pipe(tap(console.log));
      return this.http.get(this.apiUrl + 'currency').pipe(
        take(2)
      );
    }

    getReviews() {
      console.log('ttpppaspdspdas')
      return this.http.get(this.apiUrl + 'reviews').pipe(tap(console.log));
    }

    sendReview(review) {
      return this.http.post(this.apiUrl + 'reviews/add', {...review, ...review, tekst: review.tekst.trim()});
    }

  // getPlanets(page: number = 1): Observable<any> {
  //   return this.http.get(this.apiUrl + 'planets/?page=' + page);
  // }

  // updateFavesLocalStorage(favesPlanetsList: PlanetDetailsInterface[]) {
  //   const jsonPlanets = JSON.stringify(favesPlanetsList);
  //   localStorage.setItem('favePlanets', jsonPlanets);
  // }

  // loadFavesLocalStorage() {
  //   return of(JSON.parse(localStorage.getItem('favePlanets')));
  // }

  // getPlanetsDetails(id: number): Observable<any> {
  //   return this.http.get<PlanetDetailsInterface>(`${this.apiUrl}planets/${id}`);
  // }
}
