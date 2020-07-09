import { AccountsCacheConditionedResolver } from './../resolvers/accountsCacheConditioned.resolver';
import { RegionsCacheConditionedResolver } from './../resolvers/regionsCacheConditioned.resolver';
import { ReviewsCacheConditionedResolver } from './../resolvers/reviewsCacheConditioned.resolver';
import { TermsAndConditionsComponent } from './../components/terms-and-conditions/terms-and-conditions.component';
import { CurrencyResolver } from './../resolvers/currency.resolver';
import { MainComponent } from './../main/main.component';
import { AccountsInitiateResolver } from './../resolvers/accounts.resolver';
import { RegionsInitiateResolver } from './../resolvers/regions.resolver';
import { ReviewsInitiateResolver } from './../resolvers/reviews.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageFeatureComponent } from '../homepage/feature/feature.component';
import { AccountsFeatureComponent } from '../accounts/feature/feature.component';
import { ReviewsFeatureComponent } from '../reviews/feature/feature.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, 
    resolve: {regions: RegionsInitiateResolver, accounts: AccountsInitiateResolver, currency: CurrencyResolver, reviews: ReviewsInitiateResolver},
    children: [
      {
        path: 'payment',
        loadChildren: () => import('./../modules/payment-verification/payment-verification.module').then(m => m.PaymentVerificationModule)
      },
    {
      path: '',
      component: HomepageFeatureComponent,
      resolve: {regions: RegionsCacheConditionedResolver, accounts: AccountsCacheConditionedResolver}
    }, {
      path: 'reviews',
      component: ReviewsFeatureComponent,
      resolve: {reviews: ReviewsCacheConditionedResolver},
    }, {
      path: 'accounts',
      component: AccountsFeatureComponent,
      resolve: {regions: RegionsCacheConditionedResolver, accounts: AccountsCacheConditionedResolver}
    }, {
      path: 'terms-and-conditions',
      component: TermsAndConditionsComponent
    }, {
      path: '**', redirectTo: ''
    }
  ]
}
];

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: '',
//         loadChildren: () =>
//           import(
//             './homepage/homepage.module'
//           ).then(m => m.HomepageModule)
//       },
//       {
//         path: 'accounts',
//         loadChildren: () =>
//           import(
//             './accounts/accounts.module'
//           ).then(m => m.AccountsModule)
//       },
//       {
//         path: 'reviews',
//         loadChildren: () =>
//           import(
//             './reviews/reviews.module'
//           ).then(m => m.ReviewsModule)
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
