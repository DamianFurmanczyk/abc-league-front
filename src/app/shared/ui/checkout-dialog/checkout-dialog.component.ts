import { Component, OnInit, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
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
