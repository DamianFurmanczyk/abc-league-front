import { AppFacade } from './../../core/state/facades/app.facade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class HomepageFeatureComponent {
  reviewsRatingAvg$ = this.facade.reviewsRatingAvg$;

  constructor(private facade: AppFacade) {}
}
