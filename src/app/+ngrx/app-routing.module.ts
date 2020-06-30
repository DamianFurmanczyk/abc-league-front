import { CurrencyResolver } from './../resolvers/currency.resolver';
import { MainComponent } from './../main/main.component';
import { AccountsResolver } from './../resolvers/accounts.resolver';
import { RegionsResolver } from './../resolvers/regions.resolver';
import { ReviewsResolver } from './../resolvers/reviews.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageFeatureComponent } from '../homepage/feature/feature.component';
import { AccountsFeatureComponent } from '../accounts/feature/feature.component';
import { ReviewsFeatureComponent } from '../reviews/feature/feature.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, 
    resolve: {regions: RegionsResolver, accounts: AccountsResolver, currency: CurrencyResolver},
    children: [
    {
      path: '',
      component: HomepageFeatureComponent
    }, {
      path: 'reviews',
      resolve: {reviews: ReviewsResolver},
      component: ReviewsFeatureComponent
    }, {
      path: 'accounts',
      component: AccountsFeatureComponent
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
