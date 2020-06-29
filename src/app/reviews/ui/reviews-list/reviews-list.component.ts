import { DataAccessService } from './../../../+ngrx/services/app.service';
import { Review } from './../../../models/reviews.interface';
import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsListComponent implements OnInit, OnDestroy {
  sub: Subscription;

  @Input() reviews: Review[];

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.sub = this.dataAccess.getReviews().pipe(
      first()
    ).subscribe(
      res => {
        // this.reviews = res
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
