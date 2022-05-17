import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { TwimpsResolver } from '../shared/twimp/twimps.resolver';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { twimps: TwimpsResolver },
    canActivate: [AuthGuardService],
  },
  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
