import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Review } from 'src/app/models/reviews.interface';
import * as Moment from 'moment';

@Injectable()

export class ReviewsListPresenterService {
    sortedReviewsList: BehaviorSubject<Review[]> = new BehaviorSubject([]);
    constructor() { }

    sortByDate(reviews: Review[], asc: boolean = true) {
        const reviewsCopy = [...reviews];
        const sortedArrayDesc  = reviewsCopy.sort((a,b) =>  {
            // console.log(new Date(a.created_at).getMilliseconds())
            // console.log(new Date(a.created_at))
            // console.log(a.created_at)
            // console.log(Moment(b.created_at).format())
            // console.log(Moment(b.created_at).millisecond())
            // console.log(Moment(a.created_at).millisecond())
            return Moment(a.updated_at ||a.created_at).valueOf() - Moment(b.updated_at || b.created_at).valueOf() ;
        });

        this.sortedReviewsList.next(asc ? sortedArrayDesc.reverse() : sortedArrayDesc);
    }

    sortByRating(reviews: Review[], asc: boolean = true) {
        const reviewsCopy = [...reviews];
        const sortedArrayDesc  = reviewsCopy.sort((a,b) =>  a.stars - b.stars);

        this.sortedReviewsList.next(asc? sortedArrayDesc.reverse() : sortedArrayDesc);
    }
}