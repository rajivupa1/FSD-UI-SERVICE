import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   // loadChildren: () => import('src/app/components/landing/landing.module').then(m => m.LandingModule)
  //   component: LoginComponent
  // },
  {
    path: 'detials',
    // loadChildren: () => import('src/app/components/profile-details/profile-details.module').then(m => m.ProfileDetailsModule)
    component: DetailsComponent
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('src/app/components/listing/listing.module').then(m => m.ListingModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
