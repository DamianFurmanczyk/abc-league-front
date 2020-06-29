import { AppFacade } from './../+ngrx/state/facades/app.facade';
import { Actions, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { fromAppActions } from '../+ngrx/state/app.actions';

@Injectable()
export class ReviewsResolver implements Resolve<Observable<Action>> {
  constructor(private facade: AppFacade, private action$: Actions) {}

  resolve() {

    this.facade.loadRegions();

    return this.action$.pipe(
      ofType(fromAppActions.Types.LoadRegionsSuccess),
      map((a: fromAppActions.LoadRegionsSuccess) => a.payload),
      take(1)
    );
  
  
  }
}