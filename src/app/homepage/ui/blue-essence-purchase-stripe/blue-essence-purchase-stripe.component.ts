import { Router } from '@angular/router';
import { ScrollService } from './../../../shared/utils/scrolls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-essence-purchase-stripe',
  templateUrl: './blue-essence-purchase-stripe.component.html',
  styleUrls: ['./blue-essence-purchase-stripe.component.scss']
})
export class BlueEssencePurchaseStripeComponent implements OnInit {

  constructor(private scrollS: ScrollService, private router: Router) { }

  ngOnInit(): void {

  }

  navigateToAccounts() {
    this.router.navigate(['/accounts']);
    this.scrollS.navigateAndScrollToElem('.account-options');
  }

}
