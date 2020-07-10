import { currencyData } from './../../../models/currencyData.interface';
import { DataAccessService } from './../../../+ngrx/services/app.service';
import { AccountWithCountAndOrderQty } from './../../../models/accountExtended.interface';
import { Component, OnInit, Output, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})

export class CheckoutDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('popup') popup: ElementRef;
  @Output() checkoutToggle = new EventEmitter();
  @Input() set selectedAccount(acc: AccountWithCountAndOrderQty) {
    this.selAccount = acc;
    this.price = acc.priceAfterConversion * acc.orderQty;
  };
  @Input() currency: currencyData;
  @Output() changeOrderQuantity: EventEmitter<{q: number, id: number, selectedAccIsTarget: boolean}> = new EventEmitter();

  selAccount: AccountWithCountAndOrderQty;
  price: number;
  showCouponInputFlag: boolean = false;
  regionsIdToNameMap = {
    1: 'EUNE',
    2: 'NA',
    3: 'EUW',
    4: 'TR',
    5: 'RU',
    6: 'BR',
    7: 'LAN',
    8: 'LAS',
    9: 'OCE',
    10: 'JP'
  }

  constructor(private DataAccessService: DataAccessService) { }

  ngOnInit(): void {
    this.onInitiatePayment();
  }

  onInitiatePayment() {
    const selAcc = this.selAccount;
    this.DataAccessService.initiatePayment(selAcc.description, 'arek@gmail.com', 
      selAcc.priceAfterConversion || selAcc.price_usd, this.currency.name, 1).then(res => {
        window.open(
        res,
        '_blank'
      );
    })
  }

  onChangeOrderQuantity(q: number, id: number) {
    this.changeOrderQuantity.emit({q, id, selectedAccIsTarget: true});
    
    this.price = this.selAccount.priceAfterConversion * this.selAccount.orderQty;
    if(this.selAccount.orderQty > 1) this.price = +((this.price * .9).toFixed(2));
  }
  
  hideFormAndToggleDisplayAfter() {
    this.popup.nativeElement.classList.remove('active');
    setTimeout(() => {
      this.checkoutToggle.emit();
    }, 350);
  }

  ngAfterViewInit() {
    // console.log(this.form)
    // console.log(this.form.nativeElement.classList)
    setTimeout(() => {
      this.popup.nativeElement.classList.add('active');
    }, 10);
  }

  toggleCouponInputDisplay() {
    this.showCouponInputFlag = !this.showCouponInputFlag;
  }

}
