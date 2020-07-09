import { Account } from './../../../models/account.interface';
import { takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { currencyData } from './../../../models/currencyData.interface';
import { AccountWithCountAndOrderQty } from './../../../models/accountExtended.interface';
import { AppFacade } from './../../../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-account-purchase-stripe-with-popup',
  templateUrl: './account-purchase-stripe-with-popup.component.html',
  styleUrls: ['./account-purchase-stripe-with-popup.component.scss']
})
export class AccountPurchaseStripeWithPopupComponent implements OnInit, OnDestroy {
  @Input() altStyles?: boolean = false;
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
