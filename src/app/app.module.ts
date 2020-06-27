import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// todo: learn new lazy-loading, export all imports below as {} to later spread ... in declarations

import { AppRoutingModule } from './+ngrx/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './+ngrx/state/app.effects';
import * as fromApp from './+ngrx/state/app.reducer';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from './+ngrx/dataAccess.module';

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
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
