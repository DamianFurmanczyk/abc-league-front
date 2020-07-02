import { Observable } from 'rxjs';
import { Review } from './../../models/reviews.interface';
import { ReviewsFacade } from './../../+ngrx/state/facades/reviews.facade';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class ReviewsFeatureComponent implements OnInit {
  reviews$: Observable<Review[]>;
  showAddReviewFormFlag: boolean = false;

  onToggleAddReviewForm() {
    this.showAddReviewFormFlag = !this.showAddReviewFormFlag
  }

  constructor(private route: ActivatedRoute, private facade: ReviewsFacade) { }

  ngOnInit(): void {
    this.reviews$ = this.facade.reviews$;
  }

}
