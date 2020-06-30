import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  set currencyOptionsAndActiveCurrency(excludeCurr: { name: string, exchangeRateToDollar: number }) {
    this.activeCurrency = excludeCurr.name;
    this.currencyOptions = this.currencyOptions.filter(el => el != excludeCurr.name)
  }

  dropOpen = false;
  activeCurrency: string = '';
  currencyOptions: string[] = ['PLN', 'EUR', 'GBP', 'USD'];

  constructor(private route: ActivatedRoute) { }

  toggleDrop() {
    this.dropOpen = !this.dropOpen;
  }

  ngOnInit(): void {
    this.currencyOptionsAndActiveCurrency = this.route.snapshot.data.currency;
  }

}
