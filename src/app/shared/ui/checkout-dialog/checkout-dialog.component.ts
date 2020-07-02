import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  showCouponInputFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCouponInputDisplay() {
    this.showCouponInputFlag = !this.showCouponInputFlag;
  }

}
