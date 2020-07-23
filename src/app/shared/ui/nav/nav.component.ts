import { ScrollService } from './../../utils/scrolls.service';
import { Component, Input, Output, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {CountryToCurrencyAbbrevMap} from '../../../data/CountryToCurrencyAbbrevMap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent  {
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
    if(this.initialCurrencyInputSoThatItsBeenLoadedBasedOnIpflag) {
      this.currencyOptions = [...this.currencyOptions, excludeCurr.name];
      this.initialCurrencyBasedOnIp = excludeCurr.name;
      this.initialCurrencyInputSoThatItsBeenLoadedBasedOnIpflag = false;
    }
    this.activeCurrency = excludeCurr.name;
    this.currencyOptionsToDisplay = this.currencyOptions.filter(el => el != excludeCurr.name);
    if(this.initialCurrencyOptions.includes(excludeCurr.name) && this.initialCurrencyOptions.includes(this.initialCurrencyBasedOnIp)) {
      this.currencyOptionsToDisplay = this.initialCurrencyOptions;
    }
  }

  @Output() currencyChange = new EventEmitter();

  initialCurrencyBasedOnIp: string;
  initialCurrencyInputSoThatItsBeenLoadedBasedOnIpflag = true;
  initialCurrencyOptions = ['USD', 'GBP', 'EUR'];
  scrollActiveNavAnyways: boolean;
  activeClassScrollSet: boolean
  activeClassSet: boolean;
  dropOpen = [false, false];
  activeCurrency = '';
  currencyOptions = this.initialCurrencyOptions;
  currencyOptionsToDisplay: string[] = [];
  currencySymbolMap = CountryToCurrencyAbbrevMap;

  constructor(private scrollSer: ScrollService) { }

  scrollTopOnNavigateAndDismiss() {
    this.hideNavUl();
    this.scrollSer.scrollToTopOnNavigate();
  }

  scrollToPrivacyPolicyOnNavigateAndDismiss() {
    this.hideNavUl();
    this.scrollSer.navigateAndScrollToElem('.privacy-policy', 'tos');
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

}
