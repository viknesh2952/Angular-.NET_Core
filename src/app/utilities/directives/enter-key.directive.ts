import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnterKey]'
})
export class EnterKeyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('document:keydown.enter', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    this.el.nativeElement.click(); // Simulate a click on the element
  }

}
