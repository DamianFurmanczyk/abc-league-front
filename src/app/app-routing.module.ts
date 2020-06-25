import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageFeatureComponent } from './homepage/feature/feature.component';
import { AccountsFeatureComponent } from './accounts/feature/feature.component';
import { ReviewsFeatureComponent } from './reviews/feature/feature.component';

const routes: Routes = [
  {
  path: '',
  component: HomepageFeatureComponent
}, {
  path: 'reviews',
  component: ReviewsFeatureComponent
}, {
  path: 'accounts',
  component: AccountsFeatureComponent
}, {
  path: '**', redirectTo: ''
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
