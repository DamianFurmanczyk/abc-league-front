import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageFeatureComponent } from '../homepage/feature/feature.component';
import { AccountsFeatureComponent } from '../accounts/feature/feature.component';
import { ReviewsFeatureComponent } from '../reviews/feature/feature.component';

import { CouponsInitiateResolver } from './../resolvers/coupons.resolver';
import { ReviewsRatingAvgCacheConditionedResolver } from './../resolvers/reviewsRatingAvgCacheConditioned.resolver';
import { ReviewsRatingAvgInitiateResolver } from './../resolvers/reviewsAvgRating.resolver';
import { AccountsCacheConditionedResolver } from './../resolvers/accountsCacheConditioned.resolver';
import { RegionsCacheConditionedResolver } from './../resolvers/regionsCacheConditioned.resolver';
import { ReviewsCacheConditionedResolver } from './../resolvers/reviewsCacheConditioned.resolver';
import { CurrencyResolver } from './../resolvers/currency.resolver';
import { MainComponent } from './../main/main.component';
import { AccountsInitiateResolver } from './../resolvers/accounts.resolver';
import { RegionsInitiateResolver } from './../resolvers/regions.resolver';
import { ReviewsInitiateResolver } from './../resolvers/reviews.resolver';

ReviewsRatingAvgInitiateResolver
ReviewsRatingAvgCacheConditionedResolver
CouponsInitiateResolver

const routes: Routes = [
  {
    path: '',
    component: MainComponent, 
    resolve: {ReviewsRatingAvgInitiateResolver, CouponsInitiateResolver, RegionsInitiateResolver, 
      AccountsInitiateResolver, CurrencyResolver, ReviewsInitiateResolver},
    children: [
      {
        path: 'payment/:paymentId',
        loadChildren: () => import('./../modules/payment-verification/payment-verification.module').then(m => m.PaymentVerificationModule)
      },
      {
        path: 'tos',
        loadChildren: () => import('./../modules/tos/tos.module').then(m => m.TosModule)
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('./../modules/tos/tos.module').then(m => m.TosModule)
      },
    {
      path: '',
      component: HomepageFeatureComponent,
      resolve: {ReviewsRatingAvgCacheConditionedResolver, RegionsCacheConditionedResolver, AccountsCacheConditionedResolver}
    }, {
      path: 'reviews',
      component: ReviewsFeatureComponent,
      resolve: {ReviewsCacheConditionedResolver},
    }, {
      path: 'accounts',
      component: AccountsFeatureComponent,
      resolve: {RegionsCacheConditionedResolver, AccountsCacheConditionedResolver}
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
