import { AuthorCardComponent } from './author/author-card/author-card.component';
import { AuthorService } from './author/author.service';
import { ChangeBackgroundDirective } from './change-background.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { TwimpService } from './twimp/twimp.service';

@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    ChangeBackgroundDirective,
    AuthorCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [AuthorService, TwimpService],
  exports: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent],
})
export class SharedModule {}
