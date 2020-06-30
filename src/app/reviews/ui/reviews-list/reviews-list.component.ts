import { DataAccessService } from './../../../+ngrx/services/app.service';
import { Review } from './../../../models/reviews.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsListComponent implements OnInit {
  @Output() toggleAddReviewForm = new EventEmitter<void>();
  @Input() reviews: Review[];

  sub: Subscription;

  onToggleAddReviewForm() {
    this.toggleAddReviewForm.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
