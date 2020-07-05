import { ReviewsFacade } from './../+ngrx/state/facades/reviews.facade';
import { Actions, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { fromAppActions } from '../+ngrx/state/app.actions';

@Injectable()
export class ReviewsResolver implements Resolve<Observable<Action>> {
  constructor(private facade: ReviewsFacade, private action$: Actions) {}

  resolve() {

    this.facade.loadReviews();

    return this.action$.pipe(
      ofType(fromAppActions.Types.LoadReviewsSuccess, fromAppActions.Types.LoadReviewsFail),
      map((a: fromAppActions.LoadReviewsSuccess) => a.payload),
      take(1)
    );
  
  
  }
}