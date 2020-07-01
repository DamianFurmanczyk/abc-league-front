import { NavTrackScroll } from './../../directives/nav_activation_tracker';
import { CurrencyResolver } from './../resolvers/currency.resolver';
import { MainComponent } from './../main/main.component';
import { RegionsResolver } from './../resolvers/regions.resolver';
import { AddReviewFormComponent } from '../reviews/ui/add-review-form/add-review-form.component';
import { ReviewsFacade } from './state/facades/reviews.facade';
import { ReviewsResolver } from '../resolvers/reviews.resolver';
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromApp from './state/app.reducer';

import { RegionSelectionComponent } from '../shared/ui/region-selection/region-selection.component';
import { PaymentMethodStripeComponent } from '../shared/ui/payment-method-stripe/payment-method-stripe.component';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { CheckoutDialogComponent } from '../shared/ui/checkout-dialog/checkout-dialog.component';
import { NavComponent } from '../shared/ui/nav/nav.component';

import { PerksListComponent } from '../homepage/ui/perks-list/perks-list.component';
import { HeroComponent } from '../homepage/ui/hero/hero.component';
import { BlueEssencePurchaseStripeComponent } from '../homepage/ui/blue-essence-purchase-stripe/blue-essence-purchase-stripe.component';

import { ReviewsListComponent } from '../reviews/ui/reviews-list/reviews-list.component';

import { AccountPurchaseStripeComponent } from '../accounts/ui/account-purchase-stripe/account-purchase-stripe.component';
import { AccountFaqComponent } from '../accounts/ui/account-faq/account-faq.component';


import {HomepageFeatureComponent} from '../homepage/feature/feature.component';
import {AccountsFeatureComponent} from '../accounts/feature/feature.component';
import {ReviewsFeatureComponent} from '../reviews/feature/feature.component';

import { AppEffects } from './state/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [    MainComponent, AppComponent,
    RegionSelectionComponent,
    PerksListComponent,
    ReviewsFeatureComponent,
    AccountsFeatureComponent,
    HeroComponent,
    BlueEssencePurchaseStripeComponent,
    HomepageFeatureComponent,
    ReviewsListComponent,
    AccountFaqComponent,
    AccountPurchaseStripeComponent,
    PaymentMethodStripeComponent,
    FooterComponent,
    CheckoutDialogComponent,
    HomepageFeatureComponent,
    AddReviewFormComponent,
    ReviewsFeatureComponent,
    AccountsFeatureComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromApp.APP_FEATURE_KEY,
      fromApp.reducer
    ),
    EffectsModule.forFeature([AppEffects])
  ],
  providers: [
    DataAccessService,
    ReviewsResolver,
    ReviewsFacade,
    RegionsResolver,
    CurrencyResolver
  ]
})
export class DataAccessModule {}
