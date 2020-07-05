import { Router } from '@angular/router';
import { ScrollService } from './../../../shared/utils/scrolls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private scrollSer: ScrollService, private router: Router) { }

  ngOnInit(): void {
    
  }


  navigateAndScrollToAccounts() {
    this.router.navigate(['/accounts']);
    this.scrollSer.navigateAndScrollToElem('.account-options');
  }

  navigateAndScrollToReviews() {
    this.router.navigate(['/reviews']);
    this.scrollSer.navigateAndScrollToElem('.reviews');
  }

}
