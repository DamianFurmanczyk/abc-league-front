import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  catchError,
  map,
  mergeMap
} from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppPartialState } from './app.reducer';
import { fromAppActions } from './app.actions';

import { DataAccessService } from '../services/app.service'

// import { getFavouritePlanetsArray } from './planets.selectors';

// import { PlanetsPartialState } from './planets.reducer';

// import { PlanetDetailsInterface } from '@swapi-app/swapi/planets-overview/domain';

@Injectable()
export class AppEffects {

  @Effect()
  loadCurrencyBasedOnLocation$ = this.actions$.pipe(
    ofType(fromAppActions.Types.loadCurrencyBasedOnLocation),
    mergeMap((action: fromAppActions.loadCurrencyBasedOnLocation) =>
      this.dataAccessService.getCurrencyAdequateToUsersCountry().pipe(
        mergeMap(resp => {
          return forkJoin([this.dataAccessService.getExchangeRateToDollar(resp['0']), of(resp['0'])])
        }),
        map(resp => new fromAppActions.loadCurrencyBasedOnLocationSuccess({name: resp[1], exchangeRateToDollar: resp[0]})),
        catchError(err => of(new fromAppActions.loadCurrencyBasedOnLocationFail(err)))
      )
    )
  );

  @Effect()
  loadCurrency$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadCurrency),
    mergeMap((action: fromAppActions.LoadCurrency) =>
      this.dataAccessService.getExchangeRateToDollar(action.payload).pipe(
          map(resp => new fromAppActions.LoadCurrencySuccess({name: action.payload, exchangeRateToDollar: resp}),
          catchError(err => of(new fromAppActions.LoadCurrencyFail(err)))
      )
    )
  )
);


  @Effect()
  LoadCurrency$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadCurrency),
    mergeMap((action: fromAppActions.LoadCurrency) =>
      this.dataAccessService.getExchangeRateToDollar(action.payload).pipe(
        map(resp => new fromAppActions.LoadCurrencySuccess({name: action.payload, exchangeRateToDollar: resp})),
        catchError(err => of(new fromAppActions.LoadCurrencyFail(err)))
      )
    )
  );

  @Effect()
  loadReviews$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadReviews),
    mergeMap((action: fromAppActions.LoadReviews) =>
      this.dataAccessService.getReviews().pipe(
        map(resp =>{
          return new fromAppActions.LoadReviewsSuccess(resp)
        }),
        catchError(err => of(new fromAppActions.LoadReviewsFail(err)))
      )
    )
  );

  @Effect()
  addReview$ = this.actions$.pipe(
    ofType(fromAppActions.Types.AddReview),
    mergeMap((action: fromAppActions.AddReview) => {
      return this.dataAccessService.addReview('sd').pipe(
        map(() => new fromAppActions.AddReviewSuccess(action.type)),
        catchError(err => of(new fromAppActions.AddReviewFail(err)))
      )
    })
  );

  @Effect()
  loadRegions$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadRegions),
    mergeMap((action: fromAppActions.LoadRegions) =>
      this.dataAccessService.getRegions().pipe(
        map(resp => new fromAppActions.LoadRegionsSuccess(resp)),
        catchError(err => of(new fromAppActions.LoadRegionsFail(err)))
      )
    )
  );

  @Effect()
  loadAccounts$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadAccounts, fromAppActions.Types.SelectRegion),
    mergeMap((action: fromAppActions.LoadAccounts) =>
      this.dataAccessService.getAccounts().pipe(
        map(resp => new fromAppActions.LoadAccountsSuccess(resp)),
        catchError(err => of(new fromAppActions.LoadAccountsFail(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataAccessService: DataAccessService,
    private store$: Store<AppPartialState>
  ) {}
}