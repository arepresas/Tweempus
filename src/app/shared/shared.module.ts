import { AuthorCardComponent } from './author/author-card/author-card.component';
import { ChangeBackgroundDirective } from './change-background.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';

@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    ChangeBackgroundDirective,
    AuthorCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent],
})
export class SharedModule {}
