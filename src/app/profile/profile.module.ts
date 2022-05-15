import { CommonModule } from '@angular/common';
import { FavouriteTwimpsComponent } from './favourite-twimps/favourite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, MyTwimpsComponent, FavouriteTwimpsComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
