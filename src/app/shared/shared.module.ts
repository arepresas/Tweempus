import { ChangeBackgroundDirective } from './change-background.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';

@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    ChangeBackgroundDirective,
  ],
  imports: [CommonModule],
  exports: [TwimpCardComponent, TwimpListComponent],
})
export class SharedModule {}
