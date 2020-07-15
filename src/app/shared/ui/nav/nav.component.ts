import { ScrollService } from './../../utils/scrolls.service';
import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  @ViewChild('navUl') navUl: ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @Input() set activeClass(flag:  boolean) {
    this.activeClassSet = flag;
  }
  @Input() set scrollActiveNavNoMatterWhat(flag:  boolean) {
    this.scrollActiveNavAnyways = flag;
  }
  @Input() set activeClassScroll(flag:  boolean) {
    this.activeClassScrollSet = flag;
  }
  @Input() set currencySetHandler(excludeCurr: { name: string, exchangeRateToDollar: number }) {
    this.activeCurrency = excludeCurr.name;
    this.currencyOptions = [...this.currencyOptions.filter(el => el != excludeCurr.name), this.activeCurrency]
  }

  @Output() currencyChange = new EventEmitter();

  scrollActiveNavAnyways: boolean;
  activeClassScrollSet: boolean
  activeClassSet: boolean;
  dropOpen = [false, false];
  activeCurrency: string = '';
  currencyOptions: string[] = ['PLN', 'EUR', 'GBP', 'USD'];
  currencySymbolMap = {
    'PLN': 'zł',
    'EUR': '€',
    'GBP': '£',
    'USD': '$'
  }

  constructor(private scrollSer: ScrollService) { }

  scrollTopOnNavigateAndDismiss() {
    this.hideNavUl();
    this.scrollSer.scrollToTopOnNavigate();
  }

  hideNavUl() {
    this.navUl.nativeElement.classList.contains('active') && this.navUl.nativeElement.classList.remove('active');
    this.hamburger.nativeElement.classList.contains('hamburger--open') && this.hamburger.nativeElement.classList.remove('hamburger--open');
  }

  toggleDrop(i: number) {
    this.dropOpen[i] = !this.dropOpen[i];
  }

  onCurrencyChange(currency: string) {
    this.currencyChange.emit(currency)
  }

  ngOnInit(): void {
  }

}
