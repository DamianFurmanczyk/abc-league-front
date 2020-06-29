import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromApp from '../app.reducer';
import * as selectors from '../app.selectors';
import { fromAppActions } from '../app.actions';


@Injectable({providedIn: 'root'})
export class AppFacade {
  regions$ = this.store.pipe(select(selectors.getRegions));
  loading$ = this.store.pipe(select(selectors.getRegionsLoading));

  constructor(private store: Store<fromApp.AppPartialState>) {}

  loadRegions(): void {
    this.store.dispatch(
      new fromAppActions.LoadRegions()
    );
  }
}