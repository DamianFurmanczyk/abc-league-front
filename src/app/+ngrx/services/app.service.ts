import { Review } from './../../models/reviews.interface';
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

    // http://api.abcleague.webup-dev.pl/pay_paypal?email=da@gmail.com&currency=PLN&price=1&quantity=2&description=asd

    getCurrencyAdequateToUsersCountry() {
      return this.http.get(this.apiUrl + 'currency');
    }

    getReviews() {
      return this.http.get<Review[]>(this.apiUrl + 'reviews');
    }

    getRegions() {
      return this.http.get(this.apiUrl + 'regions');
    }

    sendReview(review) {
      return this.http.post(this.apiUrl + 'reviews/add', {...review, tekst: review.tekst.trim()});
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
