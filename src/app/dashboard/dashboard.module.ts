import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TwimpsResolver } from '../shared/twimp/twimps.resolver';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  providers: [TwimpsResolver],
  exports: [DashboardComponent],
})
export class DashboardModule {}
