import { ReviewsFacade } from './../+ngrx/state/facades/reviews.facade';
import { filter, first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Resolve, Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';
@Injectable()
export class ReviewsInitiateResolver implements Resolve<Subscription> {
  constructor(private facade: ReviewsFacade, private router: Router) {}

  resolve() {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      first(),
      tap(e => {
        console.log('siema')
        if(this.router.url == '/reviews') return;
    
        this.facade.loadReviews();
      })).subscribe();
  }
}