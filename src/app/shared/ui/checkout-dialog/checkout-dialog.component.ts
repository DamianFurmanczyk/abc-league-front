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
  showCouponInputFlag: boolean = false;
  @Input() selectedAccount: AccountWithCountAndOrderQty;
  @Input() currency: currencyData;

  constructor(private DataAccessService: DataAccessService) { }

  ngOnInit(): void {
    console.log(this.selectedAccount);
    this.onInitiatePayment();
  }

  onInitiatePayment() {
    const selAcc = this.selectedAccount;
    this.DataAccessService.initiatePayment(selAcc.description, 'damianfurmanczykgm@gmail.com', 
      selAcc.priceAfterConversion || selAcc.price_usd, this.currency.name, 1).then(res => {
        console.log(res);
        window.open(
        res,
        '_blank' // <- This is what makes it open in a new window.
      );
    })
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
