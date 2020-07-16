import { ScrollService } from './../../../shared/utils/scrolls.service';
import { AccountWithCountAndOrderQty } from './../../../models/accountExtended.interface';
import { currencyData } from './../../../models/currencyData.interface';
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
  @Output() changeOrderQuantity: EventEmitter<{q: number, id: number, selectedAccIsTarget: boolean}> = new EventEmitter();
  @Input() accounts: AccountWithCountAndOrderQty[] = [];

  accountAlternativeDescriptionMap = {
    Basic: '40000 <br> <small>blue essence</small>',
    Standard: '50000 <br> <small>blue essence</small>',
    Premium: '60000 <br> <small>blue essence</small>',
    Epic: '70000 <br> <small>blue essence</small>',
    Legendary: '100000 <br> <small>blue essence</small>'
  }

  onCheckoutToggle() {
    this.checkoutToggle.emit();
  }

  navigateToAccounts() {
    this.scrollS.navigateAndScrollToElem('.account-options', '/accounts');
  }

  onChangeSelectedAccount(acc: AccountWithCountAndOrderQty) {
    this.changeSelectedAccount.emit(acc);
  }

  onChangeOrderQuantity(q: number, id: number) {
    this.changeOrderQuantity.emit({q, id, selectedAccIsTarget: false});
  }

  constructor(private scrollS: ScrollService) { 

   }

}
