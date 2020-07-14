import { tap } from 'rxjs/operators';
import { ReviewToAdd } from './../../models/reviewToAdd.interface';
import { DataAccessService } from './../../+ngrx/services/app.service';
import { Observable } from 'rxjs';
import { Review } from './../../models/reviews.interface';
import { ReviewsFacade } from './../../+ngrx/state/facades/reviews.facade';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private facade: ReviewsFacade, private daService: DataAccessService) { }

  ngOnInit(): void {
    this.reviews$ = this.facade.reviews$.pipe();
  }

  onAddReview(review: ReviewToAdd) {
    this.daService.addReview(review);
  }

}
