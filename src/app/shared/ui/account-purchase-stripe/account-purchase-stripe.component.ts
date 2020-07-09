import { Router } from '@angular/router';
import { ScrollService } from './../../../shared/utils/scrolls.service';
import { AccountWithCountAndOrderQty } from './../../../models/accountExtended.interface';
import { currencyData } from './../../../models/currencyData.interface';

import { Account } from './../../../models/account.interface';
import { Component, Input, Output,  } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-account-purchase-stripe',
  templateUrl: './account-purchase-stripe.component.html',
  styleUrls: ['./account-purchase-stripe.component.scss']
})

export class AccountPurchaseStripeComponent   {
  @Input() alternativeStyles?: boolean;
  @Input() currency: currencyData;
  @Output() checkoutToggle = new EventEmitter();
  @Output() changeSelectedAccount: EventEmitter<AccountWithCountAndOrderQty> = new EventEmitter();
  @Input() set accounts(accountsData: { acc: Account[], count: number[] }) {
    
    if(!accountsData.acc) return;

    const accounts_with_count = accountsData.acc.map((el, i) => { 
        return { ...el, count: accountsData.count[i], orderQty: 1 }
      }
    );
    
    this.accountsSet = accounts_with_count;
  }

  accountAlternativeDescriptionMap = {
    Basic: '40000 <br> <small>blue essence</small>',
    Standard: '50000 <br> <small>blue essence</small>',
    Premium: '60000 <br> <small>blue essence</small>',
    Epic: '70000 <br> <small>blue essence</small>',
    Legendary: '100000 <br> <small>blue essence</small>'
  }
  accountsSet: AccountWithCountAndOrderQty[] = [];

  onCheckoutToggle() {
    this.checkoutToggle.emit();
  }

  navigateToAccounts() {
    this.scrollS.navigateAndScrollToElem('.account-options', '/accounts');
  }

  onChangeSelectedAccount(acc: AccountWithCountAndOrderQty) {
    this.changeSelectedAccount.emit(acc);
  }

  changeOrderQuantity(q: number, id: number) {
    let targetedAccountOrderQty = this.accountsSet[id].orderQty;
    if( (q == -1 && targetedAccountOrderQty - 1 < 1) || (q == 1 && targetedAccountOrderQty + 1 > this.accountsSet[id].count)) return;
    this.accountsSet[id].orderQty +=  q;
  }
  constructor(private scrollS: ScrollService, private router: Router) { 
    console.log('to rem')
    // const headers = new HttpHeaders({
    //   'Content-Type':'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Accept': 'application/json'
    // });

    // this.http.get('http://api.abcleague.webup-dev.pl/reviews/add/siema/siema/4').subscribe(console.log)

    // this.http.post('http://api.abcleague.webup-dev.pl/pay_paypal', {email: 'siema@gmail.com', currency: 'PLN', price: 3, quantity: 2, description: 'siema'},
    //  {headers}).subscribe(
    //   res=>{
    //     console.log(res)
    //     console.log('res')
    //   }
    // );

//     fetch("http://api.abcleague.webup-dev.pl/pay_paypal?description=123&email=asdas@asd.pl&price=12&currency=USD&quantity=2",{method: "post"})
//     .then(res => res.json())
// .then(res => {
//         console.log(res);
//     })
    // this.http.post('http://api.abcleague.webup-dev.pl/reviews/add?tekst=asd&author=asd&stars=3', {tekst: 'asd', author: 'asd', stars: 3}, {headers}).subscribe(
    //   res=>console.log(res)
    // );
    // this.http.post('http://api.abcleague.webup-dev.pl/api/login', {email: 'sad@asd.pl', password: '213321'}, {headers}).subscribe(
    //   res=>console.log(res)
    // );

   }

}
