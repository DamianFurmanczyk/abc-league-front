import { takeUntil, tap } from 'rxjs/operators';
import { AccountWithCountAndOrderQty } from './../../models/accountExtended.interface';
import { currencyData } from './../../models/currencyData.interface';
import { AppFacade } from './../../+ngrx/state/facades/app.facade';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class HomepageFeatureComponent implements OnInit {
  accounts: any[];  
  accountsExtended$: BehaviorSubject<any> = new BehaviorSubject({acc: [], count: []});
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

  // ngOnInit(): void {

  //   this.route.parent.data
  //   .subscribe((data) => {
  //     this.accounts = data.accounts;
  //   });
    
  // }

}
