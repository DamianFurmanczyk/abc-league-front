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
    this.price = acc.priceAfterConversion * acc.orderQty;
  };
  @Input() currency: currencyData;
  @Output() changeOrderQuantity: EventEmitter<{q: number, id: number, selectedAccIsTarget: boolean}> = new EventEmitter();

  selAccount: AccountWithCountAndOrderQty;
  price: number;
  showCouponInputFlag: boolean = false;
  regionsIdToNameMap = {};
  displayEmailField = false;
  emailForm: FormGroup;
  email = '';

  constructor(private DataAccessService: DataAccessService, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
    this.emailForm.controls.email.valueChanges.subscribe((val: string) => this.email = val.trim());
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
    this.onInitiatePayment();
    setTimeout(() => {
      this.popup.nativeElement.classList.add('active');
    }, 10);
  }

  toggleCouponInputDisplay() {
    this.showCouponInputFlag = !this.showCouponInputFlag;
  }

}
