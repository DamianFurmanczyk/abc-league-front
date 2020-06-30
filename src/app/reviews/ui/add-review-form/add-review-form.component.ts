import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFormComponent implements OnInit {
  @Output() toggleAddReviewForm = new EventEmitter<void>();

  constructor() { }

  onToggleAddReviewForm() {
    this.toggleAddReviewForm.emit();
  }

  ngOnInit(): void {
  }

}
