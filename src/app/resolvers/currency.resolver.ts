import { AppFacade } from './../+ngrx/state/facades/app.facade';
import { Actions, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import {  Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { fromAppActions } from '../+ngrx/state/app.actions';

@Injectable({providedIn: 'root'})
export class CurrencyResolver implements Resolve<Observable<Action>> {
  constructor(private facade: AppFacade, private action$:  Actions) {}

  resolve() {

    this.facade.loadCurrencyBasedOnLocation();

    return this.action$.pipe(
      ofType(fromAppActions.Types.loadCurrencyBasedOnLocationSuccess),
      map((a: fromAppActions.loadCurrencyBasedOnLocationSuccess) => a.payload),
      take(1)
    );
  
  }
}