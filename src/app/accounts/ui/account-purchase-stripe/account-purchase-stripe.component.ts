import { currencyData } from './../../../models/currencyData.interface';
import { HttpClient } from '@angular/common/http';

import { Account } from './../../../models/account.interface';
import { Component, Input } from '@angular/core';

interface AccountWithCountAndOrderQty extends Account {
  count: number,
  orderQty: number
}
@Component({
  selector: 'app-account-purchase-stripe',
  templateUrl: './account-purchase-stripe.component.html',
  styleUrls: ['./account-purchase-stripe.component.scss']
})

export class AccountPurchaseStripeComponent {
  @Input() currency: currencyData;
  @Input() set accounts(accountsData: { acc: Account[], count: number[] }) {
    
    if(!accountsData.acc) return;

    const accounts_with_count = accountsData.acc.map((el, i) => { 
        return { ...el, count: accountsData.count[i], orderQty: 1 }
      }
    );
    
    this.accountsSet = accounts_with_count;
  }

  accountsSet: AccountWithCountAndOrderQty[] = [];

  changeOrderQuantity(q: number, id: number) {
    let targetedAccountOrderQty = this.accountsSet[id].orderQty;
    if( (q == -1 && targetedAccountOrderQty - 1 < 1) || (q == 1 && targetedAccountOrderQty + 1 > this.accountsSet[id].count)) return;
    this.accountsSet[id].orderQty +=  q;
  }

  constructor(private http: HttpClient) {
  console.log('to rem')
    // this.http.post('http://api.abcleague.webup-dev.pl/reviews/add?tekst=asd&author=asd&stars=3', {tekst: 'asd', author: 'asd', stars: 3}).subscribe(
    //   res=>console.log(res)
    // );

   }

}
