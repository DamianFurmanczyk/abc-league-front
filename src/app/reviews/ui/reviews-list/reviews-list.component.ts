import { DataAccessService } from './../../../+ngrx/services/app.service';
import { Review } from './../../../models/reviews.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

const starImg = '<span class="fa fa-star"></span>';

let starsArrMap = {
  1: starImg,
  2: starImg.repeat(2),
  3: starImg.repeat(3),
  4: starImg.repeat(4),
  5: starImg.repeat(5)
};

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReviewsListComponent implements OnInit {
  @Output() toggleAddReviewForm = new EventEmitter<void>();
  @Input() reviews: Review[];

  starsMap = starsArrMap;

  sub: Subscription;

  onToggleAddReviewForm() {
    this.toggleAddReviewForm.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
