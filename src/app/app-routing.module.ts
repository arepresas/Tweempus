import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/error/error.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [{ path: '**', component: ErrorComponent }];

//const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
