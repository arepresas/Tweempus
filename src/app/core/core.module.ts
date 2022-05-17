import { AuthGuardService } from './auth-guard.service';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavComponent, ErrorComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [AuthGuardService],
  exports: [HeaderComponent, NavComponent, ErrorComponent],
})
export class CoreModule {}
