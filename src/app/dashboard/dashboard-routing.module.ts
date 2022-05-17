import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { TwimpsResolver } from '../shared/twimp/twimps.resolver';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { twimps: TwimpsResolver },
  },
  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
