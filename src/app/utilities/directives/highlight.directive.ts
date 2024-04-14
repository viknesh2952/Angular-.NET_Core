import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor!: string;
  @Input('paint') isHighlighted!:Boolean;

  constructor(private elementRef:ElementRef) { }

  @HostListener('document:selectionchange', ['$event']) selectionChange() {
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  @HostBinding('class.bind-highlight') get isHighlightedEle(){
    return this.isHighlighted;
  }

}
