import { RouterModule, Routes } from '@angular/router';

import { FavouriteTwimpsComponent } from './favourite-twimps/favourite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: '/profile/my-twimps', pathMatch: 'full' },
      { path: 'my-twimps', component: MyTwimpsComponent, pathMatch: 'full' },
      {
        path: 'favourite-twimps',
        component: FavouriteTwimpsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
