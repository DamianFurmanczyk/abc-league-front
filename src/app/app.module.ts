import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import * as fromApp from './+ngrx/state/app.reducer';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from './+ngrx/ngrx.module';
import { AccountPurchaseStripeWithPopupComponent } from './shared/smart-components/account-purchase-stripe-with-popup/account-purchase-stripe-with-popup.component';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    DataAccessModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(fromApp.reducer, {
      metaReducers: [],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
