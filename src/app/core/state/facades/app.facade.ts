
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromApp from '../app.reducer';
import * as selectors from '../app.selectors';
import { fromAppActions } from '../app.actions';


@Injectable({providedIn: 'root'})
export class AppFacade {
  regions$ = this.store.pipe(select(selectors.getRegions));
  loading$ = this.store.pipe(select(selectors.getRegionsLoading));
  selectedRegion$ = this.store.pipe(select(selectors.getSelectedRegion));
  accounts$ = this.store.pipe(select(selectors.getAccounts));
  currency$ = this.store.pipe(select(selectors.getCurrency));
  coupons$ = this.store.pipe(select(selectors.getCoupons));
  reviewsRatingAvg$ = this.store.pipe(select(selectors.getReviewsRatingAvg));
  country$ = this.store.pipe(select(selectors.getCountry));

  constructor(private store: Store<fromApp.AppPartialState>) {}

  loadRegions(): void {
    this.store.dispatch(
      new fromAppActions.LoadRegions()
    );
  }

  loadCoupons(): void {
    this.store.dispatch(
      new fromAppActions.LoadCoupons()
    );
  }

  loadReviewsRatingAvg(): void {
    this.store.dispatch(
      new fromAppActions.LoadReviewsRatingAvg()
    );
  }

  LoadAccounts(): void {
    this.store.dispatch(
      new fromAppActions.LoadAccounts()
    );
  }

  loadCurrencyBasedOnLocation(): void {
    this.store.dispatch(
      new fromAppActions.loadCurrencyBasedOnLocation()
    );
  }

  LoadCurrency(currency: string): void {
    this.store.dispatch(
      new fromAppActions.LoadCurrency(currency)
    );
  }

  SelectRegion(id: number) {
    this.store.dispatch(
      new fromAppActions.SelectRegion(id)
    );
  }
}