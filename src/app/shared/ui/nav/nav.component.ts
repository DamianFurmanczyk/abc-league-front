import { ScrollService } from './../../utils/scrolls.service';
import { AppFacade } from './../../../+ngrx/state/facades/app.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  @Input() set activeClass(flag:  boolean) {
    this.activeClassSet = flag;
  }
  @Input() set activeClassScroll(flag:  boolean) {
    this.activeClassScrollSet = flag;
  }
  @Input() set currencySetHandler(excludeCurr: { name: string, exchangeRateToDollar: number }) {
    this.activeCurrency = excludeCurr.name;
    this.currencyOptions = [...this.currencyOptions.filter(el => el != excludeCurr.name), this.activeCurrency]
  }

  @Output() currencyChange = new EventEmitter();
  
  activeClassScrollSet: boolean
  activeClassSet: boolean;
  dropOpen = [false, false];
  activeCurrency: string = '';
  currencyOptions: string[] = ['PLN', 'EUR', 'GBP', 'USD'];

  constructor(private scrollSer: ScrollService, private router: Router) { }

  scrollTopOnNavigate(path: string) {
    this.scrollSer.scrollToTopOnNavigate();
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
