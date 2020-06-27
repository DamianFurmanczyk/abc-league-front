import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { select, Store } from '@ngrx/store';
import { AppPartialState } from './+ngrx/state/app.reducer';
import { fromAppActions } from './+ngrx/state/app.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'abcLeagueFront';

  constructor(private http: HttpClient, private store: Store<AppPartialState>) {}

  ngOnInit() {
    // console.log('asd');
    // // const headers = new HttpHeaders({'Content-Type': 'application/json'});  return this.http.get<{status_code: number, data: Users[], message: string}>(this.apiUrl + 'allUsers', {headers: headers});  }
    this.store.dispatch(new fromAppActions.LoadAppropCurrency());
    this.store.dispatch(new fromAppActions.LoadReviews());
    // // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // this.http.post('http://api.abcleague.webup-dev.pl/pay_paypal', {email: 'da@gmail.com', currency: 'PLN', price: 1, quantity: 2, description: 'asd'}).subscribe(console.log);
    // this.http.get('http://api.abcleague.webup-dev.pl/reviews').subscribe(console.log);
    // this.http.post('http://api.abcleague.webup-dev.pl/reviews/add', { tekst: 'siea', author: 'siea', stars: 5}).subscribe(console.log);

  }
}
