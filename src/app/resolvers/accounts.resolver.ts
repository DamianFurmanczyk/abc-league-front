import { AppFacade } from './../+ngrx/state/facades/app.facade';
import { Actions, ofType } from '@ngrx/effects';
import { map, take, tap } from 'rxjs/operators';
import {  Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { fromAppActions } from '../+ngrx/state/app.actions';

@Injectable({providedIn: 'root'})
export class AccountsResolver implements Resolve<Observable<Action>> {
  constructor(private facade: AppFacade, private action$:  Actions) {}

  resolve() {

    this.facade.LoadAccounts();


    return this.action$.pipe(
      ofType(fromAppActions.Types.LoadAccountsSuccess, fromAppActions.Types.LoadAccountsFail),
      map((a: fromAppActions.LoadAccountsSuccess) => a.payload),
      take(1)
    );
  
  }
}