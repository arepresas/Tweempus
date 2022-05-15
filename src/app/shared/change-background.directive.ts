import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tweempusChangeBackground]',
})
export class ChangeBackgroundDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    console.log('mouseover');
    this.el.nativeElement.style.backgroundColor = '#ffe600';
  }

  @HostListener('mouseout')
  onMouseOut() {
    console.log('mouseout');
    this.el.nativeElement.style.backgroundColor = '#ffffff';
  }
}
