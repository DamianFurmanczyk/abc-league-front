import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  catchError,
  map,
  mergeMap,
  switchMap,
  tap,
  first,
  withLatestFrom
} from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
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
  loadAppropCurrency$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadAppropCurrency),
    mergeMap((action: fromAppActions.LoadAppropCurrency) =>
      this.dataAccessService.getCurrencyAdequateToUsersCountry().pipe(
        map(resp => {
          console.log('getCurrencyAdequateToUsersCountry');
          console.log(resp)
          return new fromAppActions.LoadAppropCurrencySuccess(resp);
        }),
        catchError((err, caught) => {
          console.log('getCurrencyAdequateToUsersCountry');
          console.log(err)
          return of(new fromAppActions.LoadAppropCurrencyFail(err));
        })
      )
    )
  );

  @Effect()
  loadReviews$ = this.actions$.pipe(
    ofType(fromAppActions.Types.LoadReviews),
    mergeMap((action: fromAppActions.LoadReviews) =>
      this.dataAccessService.getReviews().pipe(
        map(resp => {
          console.log('getReviews');
          return new fromAppActions.LoadReviewsSuccess(resp);
        }),
        catchError((err, caught) => {
          console.log('getReviews');
          return of(new fromAppActions.LoadReviewsFail(err));
        })
      )
    )
  );

  // @Effect()
  // loadCurrencies$ = this.actions$.pipe(
  //   ofType(fromAppActions.Types.LoadAppropCurrency),
  //   mergeMap((action: fromAppActions.LoadAppropCurrency) =>
  //     this.dataAccessService.getCurrencyAdequateToUsersCountry().pipe(
  //       map(resp => {
  //         console.log('asd123');
  //         return new fromAppActions.LoadAppropCurrencySuccess(resp);
  //       }),
  //       catchError((err, caught) => {
  //         console.log('asd');
  //         return of(new fromAppActions.LoadAppropCurrencyFail(err));
  //       })
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private dataAccessService: DataAccessService,
    private store$: Store<AppPartialState>
    // private store$: Store<PlanetsPartialState>
  ) {}
}

// @Effect()
// loadPlanets$ = this.actions$.pipe(
//   ofType(fromPlanetsActions.Types.LoadPlanets),
//   switchMap((action: fromPlanetsActions.LoadPlanets) =>
//     this.dataAccessService.getPlanets(action.payload).pipe(
//       map(planets => new fromPlanetsActions.LoadPlanetsSuccess(planets)),
//       catchError(error => of(new fromPlanetsActions.LoadPlanetsFail(error)))
//     )
//   )
// );

// @Effect()
// loadPlanetsDetails$ = this.actions$.pipe(
//   ofType(fromPlanetsActions.Types.LoadPlanetDetails),
//   mergeMap((action: fromPlanetsActions.LoadPlanetDetails) =>
//     this.dataAccessService.getPlanetsDetails(action.payload).pipe(
//       map(
//         planetsDetails =>
//           new fromPlanetsActions.LoadPlanetDetailsSuccess(planetsDetails)
//       ),
//       catchError(err =>
//         of(new fromPlanetsActions.LoadPlanetDetailsFailure(err))
//       )
//     )
//   )
// );

// @Effect({
//   dispatch: false
// })
// saveFaveToLocalStorage$ = this.actions$.pipe(
//   ofType(fromPlanetsActions.Types.TogglePlanetsFavouriteStatus),
//   // withLatestFrom(this.store$.select(getFavouritePlanetsArray)),
//   tap(([action, faves]) =>
//     this.dataAccessService.updateFavesLocalStorage(faves)
//   )
// );

// @Effect()
// loadFavesFromLocalStorage$ = this.actions$.pipe(
//   ofType(fromPlanetsActions.Types.LoadPlanetsFavourites),
//   mergeMap(() =>
//     this.dataAccessService
//       .loadFavesLocalStorage()
//       .pipe(
//         map(
//           // (faves: PlanetDetailsInterface[]) =>
//           //   new fromPlanetsActions.LoadPlanetsFavouritesSuccess(faves)
//         )
//       )
//   )
// );
