import { Component, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFormComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form: ElementRef;
  @Output() toggleAddReviewForm = new EventEmitter<void>();
  stars = Array.from(Array(5));

  constructor() { 
    // console.log(this.stars)
  }

  hideFormAndToggleDisplayAfter() {
    this.form.nativeElement.classList.remove('active');
    setTimeout(() => {
      this.toggleAddReviewForm.emit();
    }, 350);
  }

  ngAfterViewInit() {
    // console.log(this.form)
    // console.log(this.form.nativeElement.classList)
    setTimeout(() => {
      this.form.nativeElement.classList.add('active');
    }, 10);
  }

  onStarClick(i: number) {
    const activeStarsArr = 'active '.repeat(i + 1).split(' ');
    activeStarsArr.pop()
    this.stars = [...activeStarsArr, ...Array(4-i)];

    // console.log(activeStarsArr)
    // console.log(this.stars)
  }

  ngOnInit(): void {
  }

}
