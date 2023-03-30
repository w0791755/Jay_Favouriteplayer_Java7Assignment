import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.contentCard.nativeElement.childNodes[1].style.textDecoration =
      'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.contentCard.nativeElement.childNodes[1].style.textDecoration = 'none';
  }

  constructor(private contentCard: ElementRef) {
    console.log(this.contentCard);
  }
}