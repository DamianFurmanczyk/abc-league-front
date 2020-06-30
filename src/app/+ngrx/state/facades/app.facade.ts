
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromApp from '../app.reducer';
import * as selectors from '../app.selectors';
import { fromAppActions } from '../app.actions';
import { fromEventPattern } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AppFacade {
  regions$ = this.store.pipe(select(selectors.getRegions));
  loading$ = this.store.pipe(select(selectors.getRegionsLoading));
  selectedRegion$ = this.store.pipe(select(selectors.getSelectedRegion));
  accounts$ = this.store.pipe(select(selectors.getAccounts));
  currency$ = this.store.pipe(select(selectors.getCurrency));
  

  constructor(private store: Store<fromApp.AppPartialState>) {}

  loadRegions(): void {
    this.store.dispatch(
      new fromAppActions.LoadRegions()
    );
  }

  LoadAccounts(): void {
    this.store.dispatch(
      new fromAppActions.LoadAccounts()
    );
  }

  LoadCurrency(): void {
    this.store.dispatch(
      new fromAppActions.LoadAppropCurrency()
    );
  }

  SelectRegion(id: number) {
    this.store.dispatch(
      new fromAppActions.SelectRegion(id)
    );
  }
}