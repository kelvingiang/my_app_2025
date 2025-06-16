import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dwHighlight]',
})
export class HighlightDirective {
  @Input("dwHighlight") Highlight ="";



  @HostListener('mouseenter') onMouseEnter() {

    this.highlight(this.Highlight || 'rgb(238, 237, 237)', '1rem');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent', '0');
  }

  private highlight(bg: string, paddingLeft:string) {
    this.el.nativeElement.style.backgroundColor = bg;
    this.el.nativeElement.style.paddingLeft = paddingLeft;
    this.el.nativeElement.style.transitionDuration = "1s";
  }

  constructor(private el: ElementRef) {}
}
