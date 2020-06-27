import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppPartialState } from '../../../+ngrx/state/app.reducer';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  //@ts-ignore
  reviews$ = this.store$.pipe(tap(res => {this.reviews = res; console.log(res);console.log(this.reviews)}));
  reviews = ['asd'];
  constructor(private store$: Store<AppPartialState>) { }

  ngOnInit(): void {
  }

}
