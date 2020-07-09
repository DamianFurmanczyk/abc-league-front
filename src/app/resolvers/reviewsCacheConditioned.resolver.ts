import { ReviewsFacade } from '../+ngrx/state/facades/reviews.facade';
import { Actions, ofType } from '@ngrx/effects';
import { map, take, mergeMap, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { fromAppActions } from '../+ngrx/state/app.actions';
import { Review } from '../models/reviews.interface';

@Injectable()
export class ReviewsCacheConditionedResolver implements Resolve<Observable<Review[]>> {
  constructor(private facade: ReviewsFacade, private action$: Actions) {}

  resolve() {

    return this.facade.reviews$.pipe(
        first(),
        mergeMap((reviews: Review[] | null) => {
            if(reviews == null) {
                this.facade.loadReviews();

                return this.action$.pipe(
                  ofType(fromAppActions.Types.LoadReviewsSuccess, fromAppActions.Types.LoadReviewsFail),
                  map((a: fromAppActions.LoadReviewsSuccess) => a.payload),
                  take(1)
                );
            } else {
                return of(reviews);
            }
        })
    );

  }
}