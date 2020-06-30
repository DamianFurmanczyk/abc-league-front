import { tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Account } from './../../models/account.interface';
import { AppFacade } from './../../+ngrx/state/facades/app.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class AccountsFeatureComponent implements OnInit {
  siema: BehaviorSubject<any> = new BehaviorSubject({});
  accounts$ = this.facade.accounts$.pipe(map(
    res => {
      // res.map(el => el = {...el, price_usd: el.price_usd * this.currency.exchangeRateToDollar + this.currency.name})
      console.log(res);
      this.siema.next(res);
      console.log(this.siema);
      return res;
    }
  )).subscribe();
  currency;

  constructor(private facade: AppFacade) {}

  ngOnInit(): void {
    this.facade.currency$.subscribe(
      res => this.currency = res
    );
  }

}
