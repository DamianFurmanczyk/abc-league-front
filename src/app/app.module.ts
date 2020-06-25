import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// todo: learn new lazy-loading, export all imports below as {} to later spread ... in declarations

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionSelectionComponent } from './shared/ui/region-selection/region-selection.component';
import { PaymentMethodStripeComponent } from './shared/ui/payment-method-stripe/payment-method-stripe.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { CheckoutDialogComponent } from './shared/ui/checkout-dialog/checkout-dialog.component';
import { NavComponent } from './shared/ui/nav/nav.component';

import { PerksListComponent } from './homepage/ui/perks-list/perks-list.component';
import { HeroComponent } from './homepage/ui/hero/hero.component';
import { BlueEssencePurchaseStripeComponent } from './homepage/ui/blue-essence-purchase-stripe/blue-essence-purchase-stripe.component';

import { ReviewsListComponent } from './reviews/ui/reviews-list/reviews-list.component';

import { AccountPurchaseStripeComponent } from './accounts/ui/account-purchase-stripe/account-purchase-stripe.component';
import { AccountFaqComponent } from './accounts/ui/account-faq/account-faq.component';


import {HomepageFeatureComponent} from './homepage/feature/feature.component';
import {AccountsFeatureComponent} from './accounts/feature/feature.component';
import {ReviewsFeatureComponent} from './reviews//feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
