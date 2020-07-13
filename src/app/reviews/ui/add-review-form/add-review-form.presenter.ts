import { ReviewToAdd } from './../../../models/reviewToAdd.interface';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()

export class AddReviewFormPresenterService {
    reviewForm: FormGroup;
    stars = Array.from(Array(5));
    starsTouched = false;

    constructor(private formBuilder: FormBuilder) {
      this.reviewForm = this.formBuilder.group({
        author: ['', Validators.required],
        tekst: ['', Validators.required]
      });
    }

    onStarClick(i: number) {
      const activeStarsArr = 'active '.repeat(i + 1).split(' ');
      activeStarsArr.pop()
      this.stars = [...activeStarsArr, ...Array(4-i)];
      this.starsTouched = true;
    }

    getReviewDataQueryString() {
        const reviewToAdd = <ReviewToAdd>{author: this.reviewForm.value.author, tekst: this.reviewForm.value.tekst, stars: this.stars.length};

        return Object.keys(reviewToAdd).map(function(el) {
          return encodeURIComponent(el) + "=" + encodeURIComponent(reviewToAdd[el]);
        }).join('&');
    }

    submitAddReviewForm(e: Event) {
      e.preventDefault();
      
      if(this.reviewForm.invalid && this.stars.length == 0) return;
      console.log(this.getReviewDataQueryString())
    }
    
}
