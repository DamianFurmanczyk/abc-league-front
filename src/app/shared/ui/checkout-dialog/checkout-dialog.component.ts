import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Region } from './../../../models/region.interface';
import { currencyData } from './../../../models/currencyData.interface';
import { DataAccessService } from './../../../core/services/app.service';
import { AccountWithCountAndOrderQty } from './../../../models/accountExtended.interface';
import { Component, Output, AfterViewInit, ViewChild, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckoutDialogComponent implements AfterViewInit {
  @ViewChild('popup') popup: ElementRef;
  @Output() checkoutToggle = new EventEmitter();
  @Input() selRegion: Region;
  @Input() set regions(regions: Region[]) {
    regions.forEach((el: Region) => this.regionsIdToNameMap[el.id] = el.name);
  }
  @Input() set selectedAccount(acc: AccountWithCountAndOrderQty) {
    this.selAccount = acc;
    this.pricePer1acc = acc.priceAfterConversion;
    this.evaluatePrice();
    // this.price = acc.priceAfterConversion * acc.orderQty;
    console.log(acc.priceAfterConversion)
  };
  @Input() currency: currencyData;
  @Input() coupons: [string[], {}];
  @Output() changeOrderQuantity: EventEmitter<{q: number, id: number, selectedAccIsTarget: boolean}> = new EventEmitter();

  selAccount: AccountWithCountAndOrderQty;
  showCouponInputFlag: boolean = false;
  regionsIdToNameMap = {};
  displayEmailField = false;
  emailForm: FormGroup;
  couponForm: FormGroup;
  email = '';
  discount = 0;
  pricePer1acc: number;
  price: number;
  priceAfterDiscount: number;

  constructor(private DataAccessService: DataAccessService, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
    this.couponForm = this.fb.group({
      coupon: ['']
    });
    this.emailForm.controls.email.valueChanges.subscribe((val: string) => this.email = val.trim());
    this.couponForm.controls.coupon.valueChanges.subscribe((val: string) => {
      this.discount = this.coupons[1][val.trim().toLowerCase()] || 0;
      this.evaluatePrice();
    });
   }

  changeEmailFormDisplay(flag: boolean) {
    this.displayEmailField = flag;
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

  evaluatePrice() {
    var newPrice = this.pricePer1acc * this.selAccount.orderQty  * (this.selAccount.orderQty > 1 ? .9 : 1);
    newPrice = this.discount == 0 ? newPrice : newPrice - newPrice * (this.discount/100);
    this.price = +(newPrice.toFixed(2));
  }

  onChangeOrderQuantity(q: number, id: number) {
    this.changeOrderQuantity.emit({q, id, selectedAccIsTarget: true});

    this.evaluatePrice();
  }
  
  hideFormAndToggleDisplayAfter() {
    this.popup.nativeElement.classList.remove('active');
    setTimeout(() => {
      this.checkoutToggle.emit();
    }, 350);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.popup.nativeElement.classList.add('active');
    }, 10);
  }

  toggleCouponInputDisplay() {
    this.discount = 0;
    this.evaluatePrice();
    this.showCouponInputFlag = !this.showCouponInputFlag;
  }

}
