import { ReviewToAdd } from './../../models/reviewToAdd.interface';
import { AppFacade } from './../state/facades/app.facade';
import { Review } from './../../models/reviews.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  constructor(
    private http: HttpClient,
    private facade: AppFacade
  ) {
    this.facade.selectedRegion$.pipe(
      tap(res => this.selectedRegion = res)
    ).subscribe();
  }

  selectedRegion: any = {};
  apiUrl = 'http://api.abcleague.webup-dev.pl/';

  getCurrencyAdequateToUsersCountry() {
    return this.http.get<string>(this.apiUrl + 'currency').pipe(tap(res => {
      console.log('res')
      console.log(res)
    }));
  }

  verifyOrder(id: string) {
    return this.http.get(this.apiUrl + `verify/${id}`).pipe(tap(console.log));
  }

  getExchangeRateToDollar(currency: string) {
    return this.http.get(this.apiUrl + `convert/1/USD/${currency}`).pipe(tap(console.log));
  }

  getReviews() {
    return this.http.get<Review[]>(this.apiUrl + 'reviews');
  }

  getCoupons() {
    return this.http.get(this.apiUrl + 'coupon').pipe(tap(console.log));
  }

  getAvgReviewRating() {
    return this.http.get(this.apiUrl + 'reviews/sum').pipe(tap(console.log));
  }

  getAccounts() {
    return this.http.get<Account[]>(this.apiUrl + 'accounts/region/' + this.selectedRegion.id);
  }

  getRegions() {
    return this.http.get(this.apiUrl + 'regions');
  }

  addReview(review: ReviewToAdd) {
    return this.http.get(this.apiUrl + `reviews/add/${review.tekst}/${review.author}/${review.stars}`);
  }

  initiatePayment(description: string, email: string, price: number | string, currency: string, quantity: number) {
    return fetch(`http://api.abcleague.webup-dev.pl/pay_paypal?description=${description}&email=${email}&price=${price}&currency=${currency}&quantity=${quantity}`, 
    { method: "post" })
      .then(res => res.json());
  }
}
