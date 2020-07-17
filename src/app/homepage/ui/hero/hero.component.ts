import { ScrollService } from './../../../shared/utils/scrolls.service';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent  {
  @Input() set reviewsRatingAvg(ratingData: number) {
    let ratingAvg = ratingData[0];
    if(ratingData != null) {
      ratingAvg = +ratingData[0].toFixed(0);
    } else {
      return;
    }

    this.stars = Array.from(Array(5)).map((el, i) => ratingAvg - 1 < i  ?  '<span class="fa fa-star gray"></span>' :  '<span class="fa fa-star"></span>').join('');
    this.reviewsNum = ratingData[1];
  }

  stars: any = Array.from(Array(5)).map(() => '<span class="fa fa-star"></span>').join('');
  reviewsNum = 0;

  constructor(private scrollSer: ScrollService) { }

  navigateAndScrollToAccounts() {
    this.scrollSer.navigateAndScrollToElem('.account-options', '/accounts');
  }

  navigateAndScrollToReviews() {
    this.scrollSer.navigateAndScrollToElem('.reviews', '/reviews');
  }

}
