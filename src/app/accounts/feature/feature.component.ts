import { AccountWithCountAndOrderQty } from './../../models/accountExtended.interface';
import { currencyData } from './../../models/currencyData.interface';

import { tap, takeUntil } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Account } from './../../models/account.interface';
import { AppFacade } from './../../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class AccountsFeatureComponent implements OnInit, OnDestroy {
  accountsExtended$: BehaviorSubject<{acc: Account[], count: number[]}> = new BehaviorSubject({acc: [], count: []});
  destroyed$: Subject<boolean> = new Subject();
  currency: Observable<currencyData> = this.facade.currency$;
  selectedAccount: AccountWithCountAndOrderQty;

  showCheckoutFlag: boolean = false;

  accounts$ = this.facade.accounts$.pipe(
    tap(res => this.accountsExtended$.next(res)),
    takeUntil(this.destroyed$)
  ).subscribe();

  onToggleCheckoutFlag() {
    this.showCheckoutFlag = !this.showCheckoutFlag;
  }

  onChangeSelectedAccount(acc: AccountWithCountAndOrderQty) {
    this.selectedAccount = acc;
  }

  constructor(private facade: AppFacade) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
