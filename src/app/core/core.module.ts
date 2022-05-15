import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, ErrorComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent, ErrorComponent],
})
export class CoreModule {}
